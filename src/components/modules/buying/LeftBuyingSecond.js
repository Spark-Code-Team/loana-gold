import Image from "next/image";

const LeftBuyingSecond = () => {
  return (
    <div
      className="
        w-[392px]
        h-14
        flex
        flex-row
        justify-between
        "
    >
      <div>
        <Image
          src="/images/locationgray.png"
          alt="progress"
          width={69}
          height={50}
        />
      </div>

      <div>
        <Image
          src="/images/framebuying.png"
          alt="progress"
          width={69}
          height={50}
        />
      </div>

      <div>
        <Image
          src="/images/basketcartbuy.png"
          alt="progress"
          width={69}
          height={50}
        />
      </div>

      <div>
        <Image
          src="/images/framebuying.png"
          alt="progress"
          width={69}
          height={50}
        />
      </div>

      <div>
        <Image src="/images/paybuy.png" alt="progress" width={69} height={50} />
      </div>
    </div>
  );
};
export default LeftBuyingSecond;
