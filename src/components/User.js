const User = ({ name }) => {
  return (
    <div className="p-5 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold mb-2">Name: {name}</h2>
      <h3 className="text-lg mb-2">Contact: 1234567890</h3>
      <h4 className="text-md text-gray-600">Address: Gurgaon, Haryana</h4>
    </div>
  );
};

export default User;
