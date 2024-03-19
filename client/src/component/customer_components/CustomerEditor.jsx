import { useEffect, useState } from 'react';
import CustomerForm from './CustomerForm';
import { useParams } from 'react-router-dom';

function CustomerEditor() {
  const [customerInfo, setCustomerInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/customer/${id}`);
      const customerData = await response.json();
      setCustomerInfo(customerData);
    }
    fetchData();
  }, [])

  const [updateSuccess, setUpdateSuccess] = useState(null);

  return (
    <div className="updateCustomer">
      {updateSuccess === null ? <CustomerForm onUpdate={(isSuccess) => { setUpdateSuccess(isSuccess) }} /> : updateSuccess === true ? <h1>The updates was successfull!</h1> : <h1>Try again! Something went wrong!</h1>}

    </div>
  )
}

export default CustomerEditor;
