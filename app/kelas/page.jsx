import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import React from "react";
import c from "../../public/assets/c.png";
import python from "../../public/assets/python.png";
import java from "../../public/assets/java.png";
import htmlcss from "../../public/assets/HTMLCSS.png";

const page = () => {
  return (
    <div className="bg-blue-50">
      <Navbar />
      <div className="text-center p-10">
        <h1 className="text-4xl text-stone-950">Daftar Kelas Saat ini</h1>
      </div>
      <div className="py-10 px-20">
        <div className="flex justify-between">
          {/* first card */}
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
              src={c}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pemrograman C
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Pemrograman C adalah bahasa pemrograman yang banyak digunakan
                untuk pembuatan sistem operasi, aplikasi desktop, dan sistem
                IOT.
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
          </a>
          {/* second card */}
          <div className="p-10"></div>
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
              src={java}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pemrograman Java
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Pemrograman Java adalah bahasa pemrograman yang banyak digunakan
                untuk pembuatan aplikasi desktop, aplikasi web, dan aplikasi
                mobile.
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
          </a>
        </div>
        <div className="flex justify-between pt-10">
          {/* third card */}
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
              src={python}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pemrograman Python
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Python adalah bahasa pemrograman yang banyak digunakan untuk
                data analysis, pembuatan aplikasi desktop, dan pembuatan sistem
                kecerdasan buatan.
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
          </a>
          {/* fourth card */}
          <div className="p-10"></div>
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
              src={htmlcss}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                HTML & CSS
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                HTML dan CSS adalah dua bahasa pemrograman yang digunakan secara
                bersamaan sebagai struktur dan styling untuk pembuatan website
                dari sisi tampilan.
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
          </a>
        </div>
      </div>
      <div className="text-center p-10">
        <h1 className="text-3xl text-stone-950">
          Jangan Khawatir, kelas baru akan terus bertambah
        </h1>
        <h1 className="text-3xl text-stone-950">
          Sambil menunggu mari belajar kelas yang tersedia
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default page;
