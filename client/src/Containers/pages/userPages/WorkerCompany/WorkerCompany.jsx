import React from 'react'
import FormContainer from '../../../../Components/common/FormContainer';
import { NavLink } from 'react-router-dom';

function WorkerCompany() {
  return (
    <FormContainer class="flex gap-4">
<NavLink to='/workerSignup'>
  <button class="w-full h-12 mb-4 bg-opacity-10 bg-white text-white border border-white rounded-md p-2 transition-transform transform hover:scale-105">
    Worker
  </button>
</NavLink>

<NavLink to='/companySignup'>
  <button class="w-full h-12 mt-4 bg-opacity-10 bg-white text-white border border-white rounded-md p-2 transition-transform transform hover:scale-105">
    Company
  </button>
</NavLink>

</FormContainer>

  )
}

export default WorkerCompany