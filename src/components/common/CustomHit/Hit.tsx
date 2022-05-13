const Hit = ({ hit }: any) => {
  return (
    <div className="cursor-pointer">
      <img src={hit?.images?.shop_catalog?.url} height={'100%'} />
      <div className="bg-white shadow-[0_28px_52px_-8px_rgba(20,37,87,0.12)] p-3 flex flex-col justify-between text-rose-900 min-h-[150px]">
        <h3 className="text-primary text-base font-extrabold mt-5">{hit?.post_title}</h3>
        <div className="w-full flex justify-end">
          <div
            dangerouslySetInnerHTML={{ __html: hit?.post_price }}
            className="mr-3 mt-2 text-lg font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default Hit;
