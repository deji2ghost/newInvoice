
const TableComponent = () => {
  return (
    <table className="border w-full">
      <thead className="bg-orange-500 text-left ">
        <tr className="">
          <th>Invoice ID</th>
          <th>Details</th>
          <th>Date</th>
          <th>Fee</th>
          <th>Paid</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
    </table>
  );
};

export default TableComponent;
