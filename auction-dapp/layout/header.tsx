import ConnectButton from "../components/ConnectButton";

const Header = () => {
  return (
    <>
      <header>
        <div className="flex justify-between items-center py-5 md:px-6 px-3">
          <div className="text-2xl text-white">Auctioneer</div>
          <div>
            <ConnectButton />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
