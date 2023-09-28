const Cart = ({ selectedCourse, remaining, totalCredit, totalPrice }) => {
  console.log(remaining);
  return (
    <div className="card bg-base-100 shadow-md sticky top-10">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-[#2F80ED;] ">
          {remaining.length === 0 ? (
            <p>Credit Hour Remaining 20 hr</p>
          ) : (
            <p>Credit Hour Remaining {remaining} hr</p>
          )}
        </h2>
        <div className="divider"></div>

        <h2 className="text-2xl font-bold mb-2">Course Name</h2>
        <ol className="text-[#1C1B1B99] text-xl list-decimal list-inside">
          {selectedCourse.map((course) => (
            <li key={course.id}>{course.title} </li>
          ))}
        </ol>

        <div className="divider"></div>
        <h2 className="text-xl font-semibold">
          {totalCredit.length === 0 ? (
            <p>Total Credit Hour : 0</p>
          ) : (
            <p>Total Credit Hour : {totalCredit}</p>
          )}
        </h2>

        <div className="divider"></div>
        <h2 className="text-2xl font-semibold">
          {totalPrice.length === 0 ? (
            <p>Total Price : 00 USD</p>
          ) : (
            <p>Total Price : {totalPrice} USD</p>
          )}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
