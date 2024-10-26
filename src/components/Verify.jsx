import React from "react";
import'./verify.css'

const Verify = () => {
  const toexcape = "NGO's"
  return (
    <div className="px-6 py-6 w-full">
      <div>
        <div className="flex justify-between">
            <div className="flex gap-6 items-center">
                <div>
                    <img src="/Images/icon.svg" alt="Icon" width="30px" height="30px" />
                </div>
                <div>
                    <p className="test-gray-300">Tuesday 6th May</p>
                    <div className="flex">                        
                        <h1 className="flex text-#150D09-500 font-extrabold">Good afternoon,</h1><span className="text-#150D09">Admin</span> 
                    </div>
                </div>
                
            </div>
            <div className="flex gap-4" >
                <img src="/Images/beicon.svg" alt="" width="30px" height="30px" />
                <img src="/Images/bellicon.svg" alt="" width="30px" height="30px"/>
            </div>       
        </div>
        {/* account verify section */}
        <div className="pt-6">
            <h1 className="text-#000000 font-bold text-xl">Verify Account</h1>
            <div className="flex gap-6 mt-10">
              <a className="text-[#9794AA] text-[16px] font-Aeonik font-normal" href="">Celebritites</a>
              <a className="text-[#D9912B] text-[16px] border-b-2 border-[#D9912B] pb-1 " href="">{toexcape}</a>
            </div>
        </div>
      </div>
      <div>
        {/* button section */}
        <div className="pt-6 h-[50px] w-[402px] flex justify-between">
          <button className="border border-[#9794AA] rounded-full flex justify-center items-center px-3">
            <img src="/Images/Magnifer-zoom-in.svg" alt="zoom-in" className="mr-2 w-[24px] h-[24px]" />
            <p className="text-[#A0AEC0]">Search name, email</p>
          </button>
          <button className="border border-[#9794AA] rounded-full flex gap-2 justify-center items-center px-3 bg-[#F1F2F4]">
            <p className="text-[#A0AEC0]">Filter</p>
            <img src="/Images/filter.svg" alt="filter" className="mr-2 w-[24px] h-[12.55px]" />
          </button>
        </div>
        <div className="h-[470px] mt-10 w-full">
          <table className="w-full">
            <thead className="">
              <tr className=" text-[#9794AA]">
                <td>No</td>
                <td>Organazation Name</td>
                <td>Country</td>
                <td>Type</td>
                <td>Official Email</td>
                <td>Official Contact</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td>1</td>
                <td>Bloom charity</td>
                <td>Nigeria</td>
                <td>Charity</td>
                <td>Charity94@gmail.com</td>
                <td>+2348045321234</td>
                <td>Pending</td>
                <button className="btn border border-[#D9912B] rounded-full h-[32px] w-[102px] px-1 ">
                <td className="">Verify profile</td>
                </button>
                
              </tr>
              <tr>
                <td>1</td>
                <td>Bloom charity</td>
                <td>Nigeria</td>
                <td>Charity</td>
                <td>Charity94@gmail.com</td>
                <td>+2348045321234</td>
                <td>Pending</td>
                <button className="btn border border-[#D9912B] rounded-full h-[32px] w-[102px] px-1 ">
                <td className="">Verify profile</td>
                </button>
              </tr>
              <tr>
                <td>1</td>
                <td>Bloom charity</td>
                <td>Nigeria</td>
                <td>Charity</td>
                <td>Charity94@gmail.com</td>
                <td>+2348045321234</td>
                <td>Pending</td>
                <button className="btn border border-[#D9912B] rounded-full h-[32px] w-[102px] px-1 ">
                <td className="">Verify profile</td>
                </button>
              </tr>
              <tr>
                <td>1</td>
                <td>Bloom charity</td>
                <td>Nigeria</td>
                <td>Charity</td>
                <td>Charity94@gmail.com</td>
                <td>+2348045321234</td>
                <td>Pending</td>
                <button className="btn border border-[#D9912B] rounded-full h-[32px] w-[102px] px-1 ">
                <td className="">Verify profile</td>
                </button>
              </tr>
              <tr>
                <td>1</td>
                <td>Right activist NG</td>
                <td>Nigeria</td>
                <td>Human right</td>
                <td>rightactivi94@gmail.com</td>
                <td>+2348045321234</td>
                <td>Pending</td>
                <button className="btn border border-[#D9912B] rounded-full h-[32px] w-[102px] px-1 ">
                <td className="">Verify profile</td>
                </button>
              </tr>
              <tr>
                <td>1</td>
                <td>Womanhood NG</td>
                <td>Nigeria</td>
                <td>Health</td>
                <td>womanhood94@gmail.com</td>
                <td>+2348045321234</td>
                <td>Pending</td>
                <button className="btn border border-[#D9912B] rounded-full h-[32px] w-[102px] px-1 ">
                <td className="">Verify profile</td>
                </button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Verify;
