export default  function DownloadCvBtn({children}:{children:React.ReactNode}) {
    return (
        <>
            <button className="text-white hover:opacity-90 cursor-pointer bg-main py-1 px-2 rounded">{children}</button>
        </>
    );
}