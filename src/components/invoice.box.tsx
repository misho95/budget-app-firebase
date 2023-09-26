const InvoiceBox = ({ id, amount, category, date, status }) => {
  return (
    <div
      key={id}
      className="border-b-px1 border-neutral-500/30 p-2 text-neutral-500 flex gap-3 justify-between items-center select-none"
    >
      <div className="w-28">{amount}</div>
      <div className="w-28">{category}</div>
      <div className="w-28">{date}</div>
      <div
        className={`${
          status ? "text-green-500 bg-green-200" : "text-red-500 bg-red-200"
        }  p-1 rounded-xl`}
      >
        status
      </div>
      <div className="flex gap-2">
        <button>
          <span className="material-symbols-outlined">delete</span>
        </button>
        <button>
          <span className="material-symbols-outlined">edit</span>
        </button>
      </div>
    </div>
  );
};
export default InvoiceBox;
