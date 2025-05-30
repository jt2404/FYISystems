import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { DialogAnimate } from '../../components/animate';
import { RHFSelect, RHFTextField } from '../../components/hook-form';
import FormProvider from '../../components/hook-form/FormProvider';
import { updateAppointment, addAppointment } from '../../redux/Appointments/actions';
import { fetchProducts } from '../../redux/Product/actions';
import { fetchUsers } from '../../redux/Users/actions';
import { fetchFinancialAdvisors } from '../../redux/FinancialAdvisors/actions';

const Schema = Yup.object().shape({
  userName: Yup.string().required('User is required'),
  // product_id: Yup.string().nullable(),
  financialAdvisor_id: Yup.string().nullable(),
  date: Yup.string().required('Date is required'),
  startTime: Yup.string().required('Start Time is required'),
  endTime: Yup.string().required('End Time is required'),
  status: Yup.string().required('Status is required'),
});

const statuses = [
  { id: 'pending', title: 'pending' },
  { id: 'completed', title: 'completed' },
  { id: 'cancelled', title: 'cancelled' },
];

const AppointmentForm = ({ handleClose, currentRow }) => {
  const defaultValues = currentRow;
  const dispatch = useDispatch();
  const [value, setValue] = useState([]);

  const users = useSelector((state) => state.users.users);  
  const products = useSelector((state) => state.Product.products); 
  const advisors = useSelector((state) => state.financialAdvisors.financialAdvisors); 

  useEffect(()=>{
    dispatch(fetchProducts());
    dispatch(fetchUsers());
    dispatch(fetchFinancialAdvisors());
  },[dispatch])

  useEffect(() => {
    if (users && users.length > 0) {
      const formattedUsers = users.map((item) => ({
        id: item._id,
        title: item.name,
      }));
      setValue((prevState) => ({ ...prevState, users: formattedUsers }));
    }
    if (products && products.length > 0) {
      const formattedProducts = products.map((item) => ({
        id: item._id,
        title: item.name,
      }));
      setValue((prevState) => ({ ...prevState, products: formattedProducts }));
    }
    if (advisors && advisors.length > 0) {
      const formattedAdvisors = advisors.map((item) => ({
        id: item._id,
        title: item.firstName,
      }));
      setValue((prevState) => ({ ...prevState, advisors: formattedAdvisors }));
    }
  }, [users, products, advisors]);

  const methods = useForm({
    // resolver: yupResolver(Schema),
    defaultValues,
  });

  const {
    handleSubmit,
  } = methods;
  console.log(methods.formState.errors)

  const onSubmit = (data) => {
    console.log(data)
    const appointmentData = {
      userName: data.user_name,
      productId: data.product_id||null,
      financialAdvisorId: data.financialAdvisor_id !== "" ? data.financialAdvisor_id :null,
      date: data.date,
      startTime: data.startTime,
      endTime: data.endTime,
      status: data.status,
      email: data.email,
      phone: data.phone,
    };
    if (data._id) {
      appointmentData._id = data._id;
      dispatch(updateAppointment(data._id, appointmentData));
    } else {
      console.log(appointmentData)
      dispatch(addAppointment(appointmentData));
    }
    handleClose();
  };

  return (
    <>
      <DialogAnimate
        onClose={handleClose}
        title={currentRow._id ? 'Update Appointment' : 'Add Appointment'}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4} p={3}>
            <RHFTextField name="user_name" label="Name"/>
            <RHFTextField name="email" label="Email"/>
            <RHFTextField name="phone" label="Phone"/>
            <RHFSelect name="product_id" label="Product" options={value.products || []}  disabled={currentRow?._id !== "" } />
            <RHFSelect name="financialAdvisor_id" label="Financial Advisor" options={value.advisors || []} />
            <RHFTextField name="date"  type="date" />
            <RHFTextField name="startTime"  type="time" />
            <RHFTextField name="endTime" type="time" />
            <RHFSelect name="status" label="Status *" options={statuses}  disabled={ currentRow?._id !== "" } />
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="flex-end" p={3}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" onClick={handleSubmit(onSubmit)}>
              {currentRow._id ? 'Update' : 'Save'}
            </Button>
          </Stack>
        </FormProvider>
      </DialogAnimate>
    </>
  );
};

AppointmentForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  currentRow: PropTypes.shape({
    _id: PropTypes.string,
    userId: PropTypes.string,
    productId: PropTypes.string,
    financialAdvisorId: PropTypes.string,
    date: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default AppointmentForm;
