import CustomHits from '~/components/common/CustomHit';
import Pagination from '~/components/common/Pagination';
import SearchBox from '~/components/common/SearchBox';

export default function Index() {
  return (
    <>
      <div className="relative bg-container overflow-hidden">
        <div className="w-full fixed top-0 bg-white shadow-[0_44px_40px_-8px_rgba(15,45,88,0.05)] py-5 px-6">
          <SearchBox />
        </div>
        <div className="mt-[78px] px-20 pt-10 pb-45 overflow-auto max-h-[100vh]">
          <CustomHits />
        </div>
        <div className="w-full fixed bottom-0 bg-white shadow-[0_44px_40px_-8px_rgba(15,45,88,0.05)] py-5 px-6">
          <Pagination className="pagination" />
        </div>
      </div>
    </>
  );
}
