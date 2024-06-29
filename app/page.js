import Image from "next/image";
import backgroundLanding from "@/public/assets/backgroundLanding.jpg";
import Footer from "@/components/Footer";
import NavbarLanding from "@/components/NavbarLanding";

export default function Home() {
  return (
    <main className="justify-center bg-blue-50">
      <NavbarLanding />
      <div className="h-screen content-center">
        <div className="h-screen overflow-hidden relative">
          <Image src={backgroundLanding} alt="background" />
        </div>
        <div className="h-screen absolute inset-0 px-10 content-center pt-52">
          <h1 className="text-stone-950 text-7xl text-center px-16 backdrop-blur-3xl rounded-3xl shadow-2xl">
            Kursus pemrograman online yang sesuai dengan anda
          </h1>
          <a className="flex justify-center p-10" href="/beranda">
            <button className="bg-blue-500 text-blue-50 p-5 rounded-3xl text-2xl shadow-xl">
              Mulai Belajar
            </button>
          </a>
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-center text-stone-950 text-5xl pb-10">
          Fitur Belajar yang akan Memudahkan Anda
        </h1>
        <div className="py-10 flex items-center justify-between px-20">
          {/* first card */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              className="w-16 pb-4 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fillOpacity={0}
              viewBox="0 0 640 512"
            >
              <path
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
                d="M255 261.7c6.3 6.3 16.4 6.3 22.6 0l11.3-11.3c6.3-6.3 6.3-16.4 0-22.6L253.3 192l35.7-35.7c6.3-6.3 6.3-16.4 0-22.6l-11.3-11.3c-6.3-6.3-16.4-6.3-22.6 0l-58.3 58.3c-6.3 6.3-6.3 16.4 0 22.6l58.4 58.3zm96-11.3l11.3 11.3c6.3 6.3 16.4 6.3 22.6 0l58.3-58.3c6.3-6.3 6.3-16.4 0-22.6l-58.3-58.3c-6.3-6.3-16.4-6.3-22.6 0l-11.3 11.3c-6.3 6.3-6.3 16.4 0 22.6L386.8 192l-35.7 35.7c-6.3 6.3-6.3 16.4 0 22.6zM624 416H381.5c-.7 19.8-14.7 32-32.7 32H288c-18.7 0-33-17.5-32.8-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
              />
            </svg>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Online Compiler
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Langsung praktek mencoba code yang sudah dipelajari tanpa repot
              instalasi
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Coba Sekarang
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          {/* second card */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4em"
              height="4em"
              viewBox="0 0 256 256"
            >
              <path
                fill="white"
                d="m162.22 108.67l-48-32A4 4 0 0 0 108 80v64a4 4 0 0 0 2.11 3.53a4 4 0 0 0 4.11-.2l48-32a4 4 0 0 0 0-6.66M116 136.53V87.47L152.79 112ZM216 44H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm8 40a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h192a4 4 0 0 1 4 4"
              ></path>
            </svg>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Text atau Video
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Belajar melalui text yang menarik atau video yang mengasyikkan
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Belajar Sekarang
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          {/* third card */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4em"
              height="4em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M15.493 3.507a1.65 1.65 0 0 0-1.5 1.643V10a.75.75 0 0 1-.75.75c-1.443 0-2.457.588-3.206 1.488c-.773.928-1.276 2.206-1.591 3.557c-.313 1.343-.427 2.696-.461 3.722a22 22 0 0 0-.012.983h7.02v-.75a2.25 2.25 0 0 0-2.249-2.25h-1.25a.75.75 0 0 1 0-1.5h1.25a3.75 3.75 0 0 1 3.748 3.75v.75h.75a.75.75 0 0 0 .75-.75v-10A.75.75 0 0 1 18.74 9h.506a1.25 1.25 0 0 0 1.062-1.909l-.62-1a1.25 1.25 0 0 0-1.061-.591h-2.386a.75.75 0 0 1-.75-.75zM6.473 20.5c-.002-.284 0-.634.013-1.033c.036-1.083.157-2.542.5-4.012c.34-1.462.915-2.996 1.899-4.177c.872-1.047 2.055-1.801 3.61-1.985V5.15A3.15 3.15 0 0 1 15.641 2c.746 0 1.35.604 1.35 1.35V4h1.636c.95 0 1.834.492 2.335 1.3l.62 1c1.092 1.763-.084 4.02-2.093 4.19v9.26A2.25 2.25 0 0 1 17.242 22H5.795a3.797 3.797 0 0 1-2.775-6.39l1.135-1.217a3.06 3.06 0 0 0-.073-4.248L2.969 9.03a.75.75 0 0 1 1.06-1.06l1.114 1.114a4.56 4.56 0 0 1 .11 6.333l-1.136 1.216a2.3 2.3 0 0 0 1.68 3.867z"
              ></path>
            </svg>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Need a help in Claim?
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Belajar Sekarang
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
