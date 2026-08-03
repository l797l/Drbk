

export default function ButtonEnter({ loading, text, onClick, dataEmpty ,classNames ="" }: { loading: boolean; text: string; onClick: () => void; dataEmpty: boolean; classNames?: string }) {
    return (
    <>
    <button
    type="submit"
    onClick={onClick}
    disabled={loading|| dataEmpty}
  className=
 { `
  ${classNames}
    ${dataEmpty ? "cursor-not-allowed" : "cursor-pointer"}
      h-12
      rounded-xl
      bg-[#432E1A]
      text-[#EFE1D1]
      font-semibold
      hover:bg-[#5a3c22]
      transition
      disabled:opacity-50`}
  
>
  {loading ? (
    <div className="flex justify-center items-center">
      <span
        className="
          w-5
          h-5
          border-2
          border-[#EFE1D1]
          border-t-transparent
          rounded-full
          animate-spin
        "
      ></span>
    </div>
  ) : (
    text
  )}
</button></>
    );
}