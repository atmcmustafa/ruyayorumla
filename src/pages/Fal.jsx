import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const Fal = () => {
  return (
    <div className="px-6 md:px-0">
      <div className="bg-sunlight relative">
        <div className="absolute h-full w-full bg-black/60"></div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-2xl  mb-2">Fal Yorumlama Aracına Hoşgeldin!</h2>
        <p className="text-lg text-gray-400 mb-2 ">
          Kahve fincanını png veya jpg formatında yükle, yorumlayalım.
        </p>
        <div>
          <div className="bg-slate-900 p-4 mt-2 rounded flex items-center justify-center flex-col w-full">
            <div className="">
              <label
                for="file-upload"
                className="custom-file-upload flex items-center justify-center  text-center"
              >
                <IoMdAdd className="mx-auto" size={48} />
                <span>Bir resim yükle</span>
              </label>
              <input id="file-upload" type="file" />
            </div>
          </div>
          <Link className="h-10 w-36 bg-[#224E6D] font-semibold rounded text-white flex items-center justify-center mt-6">
            Gönder
          </Link>
        </div>
        <h2 className="text-2xl  mb-2 mt-8">İşte falının anlamı burada!</h2>
        <div className="bg-slate-900 p-4 mt-2 rounded">lorem2</div>
      </div>
    </div>
  );
};

export default Fal;
