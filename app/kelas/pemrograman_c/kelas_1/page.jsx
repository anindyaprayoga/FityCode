import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const page = () => {
  const codeString1 =
    '#include <stdio.h> \n int main() \n { \n printf("Hello World!"); \n return 0; \n }';
  return (
    <div className="bg-blue-50 items-center">
      <Navbar />
      <h1 className="text-5xl text-stone-950 text-center">
        Pengenalan Dasar Bahasa Pemrograman C
      </h1>
      <div className="flex justify-center align-middle p-10">
        <iframe
          width={870}
          height="525"
          src="https://youtube.com/embed/DmUBaa7UKaA"
          frameborder="0"
          className="border-solid border-2 border-stone-800"
        ></iframe>
      </div>
      <div className="text-left m-20 p-10 border-solid border-8 border-sky-500 rounded-3xl">
        <h2 className="text-stone-950 text-3xl">
          Menulis Program Pertama Hello World
        </h2>
        <p className="text-stone-950 text-xl p-2">
          Topik ini akan memperkenalkan Anda kepada bahasa pemrograman C dan
          menunjukkan cara menulis program pertama Anda, &quot;Hello
          World&quot;.
        </p>
        <p className="text-stone-950 text-xl p-2 pt-0">
          Bahasa pemrograman C adalah bahasa pemrograman tingkat tinggi yang
          banyak digunakan untuk mengembangkan berbagai jenis aplikasi. C
          terkenal dengan kecepatan dan efisiensinya, dan banyak digunakan untuk
          sistem operasi, aplikasi embedded, dan program berkinerja tinggi
          lainnya.
        </p>
        <p className="text-stone-950 text-xl p-2 pt-0">
          Program C pertama Anda akan menampilkan teks &quot;Hello World&quot;
          ke layar. Ini adalah program sederhana yang akan membantu Anda
          memahami struktur dasar program C.
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString1}
        </SyntaxHighlighter>
        <ul className="text-stone-950 text-xl p-2 pt-0">
          <li>
            Baris #include &lt;stdio.h&gt; menyertakan header file stdio.h yang
            berisi fungsi-fungsi untuk input dan output.
          </li>
          <li>
            Baris int main() mendefinisikan fungsi utama program. Fungsi utama
            adalah titik awal eksekusi program.
          </li>
          <li>
            Baris printf(&quot;Hello World!\n&quot;); menggunakan fungsi
            printf() untuk menampilkan teks &quot;Hello World!&quot; ke layar.
          </li>
          <li>
            Baris return 0; mengindikasikan bahwa program telah selesai dengan
            sukses.
          </li>
        </ul>
      </div>
      <footer className="bg-blue-950 flex justify-between">
        <div className="text-blue-50 text-2xl p-5 justify-center">
          <h1>String dalam Bahasa Pemrograman C</h1>
        </div>
        <a href="/kelas/pemrograman_c/kelas_2">
          <div className="flex p-5">
            <h1 className="text-blue-50 text-2xl px-5">next</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z"
              ></path>
              <path
                fill="white"
                d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"
              ></path>
            </svg>
          </div>
        </a>
      </footer>
      <Footer />
    </div>
  );
};

export default page;
