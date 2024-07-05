import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const page = () => {
  const codeString1 =
    "int age = 25; // Menyatakan variabel 'age' dengan tipe data 'int' dan nilai 25 \n float pi = 3.14159; // Menyatakan variabel 'pi' dengan tipe data 'float' dan nilai 3.14159 \n char letter = 'A'; // Menyatakan variabel 'letter' dengan tipe data 'char' dan nilai 'A'";
  const codeString2 =
    "int age; // Deklarasi variabel 'age' dengan tipe data 'int' \n age = 25; // Inisialisasi variabel 'age' dengan nilai 25 \n float pi; // Deklarasi variabel 'pi' dengan tipe data 'float' \n pi = 3.14159; // Inisialisasi variabel 'pi' dengan nilai 3.14159 \n char letter; // Deklarasi variabel 'letter' dengan tipe data 'char' \n letter = 'A'; // Inisialisasi variabel 'letter' dengan nilai 'A'";
  const codeString3 =
    "int sum = 10 + 20; // Menghitung jumlah 10 dan 20 (sum = 30) \n float difference = 5.5 - 3.2; // Menghitung selisih 5.5 dan 3.2 (difference = 2.3) \n char result = 'a' == 'b'; // Membandingkan karakter 'a' dan 'b' (result = 0, karena tidak sama) \n int age = 30; \n bool isAdult = age >= 18; // Memeriksa apakah 'age' lebih besar dari atau sama dengan 18 (isAdult = true)";
  return (
    <div className="bg-blue-50 items-center">
      <Navbar />
      <h1 className="text-5xl text-stone-950 text-center">
        Tipe Data dan Variabel
      </h1>
      <div className="flex justify-center align-middle p-10">
        <iframe
          width={870}
          height="525"
          src="https://youtube.com/embed/JzjfjttbaRI"
          frameborder="0"
          className="border-solid border-2 border-stone-800"
        ></iframe>
      </div>
      <div className="text-left m-20 p-10 border-solid border-8 border-sky-500 rounded-3xl">
        <h2 className="text-stone-950 text-3xl">Tipe Data Dasar</h2>
        <p className="text-stone-950 text-xl p-2">
          Bahasa pemrograman C menyediakan beberapa tipe data dasar untuk
          menyimpan berbagai jenis data:
        </p>
        <ul className="text-stone-950 text-xl p-2 pt-0">
          <li>int: Untuk menyimpan bilangan bulat (misalnya, 10, -200, 314)</li>
          <li>
            float: Untuk menyimpan bilangan desimal (misalnya, 3.14, -15.2,
            0.001)
          </li>
          <li>
            char: Untuk menyimpan karakter tunggal (misalnya, &apos;a&apos;,
            &apos;Z&apos;, &apos;$&apos;)C
          </li>
          <li>
            double: Untuk menyimpan bilangan desimal presisi tinggi (mirip
            dengan float, tetapi dengan presisi lebih tinggi)
          </li>
        </ul>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString1}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2 pt-0">
          Sebelum menggunakan variabel, Anda harus mendeklarasikannya untuk
          memberitahu compiler tentang tipe datanya. Deklarasi variabel dapat
          dilakukan dengan menggunakan pernyataan var_type variable_name;.
        </p>
        <p className="text-stone-950 text-xl p-2 pt-0">
          Inisialisasi variabel digunakan untuk memberikan nilai awal kepada
          variabel saat dideklarasikan. Inisialisasi variabel dapat dilakukan
          dengan menggunakan pernyataan var_type variable_name = value;.
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString2}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2 pt-0">
          Bahasa pemrograman C menyediakan berbagai operator aritmatika dan
          relasional untuk melakukan operasi pada variabel:
        </p>
        <p className="text-stone-950 text-xl p-2 pt-0">Operator Aritmatika:</p>
        <ul className="text-stone-950 text-xl p-2 pt-0">
          <li>+: Penjumlahan</li>
          <li>-: Pengurangan</li>
          <li>*: Perkalian</li>
          <li>/: Pembagian</li>
          <li>%: Sisa pembagian</li>
        </ul>
        <p className="text-stone-950 text-xl p-2 pt-0">Operator Relasional:</p>
        <ul className="text-stone-950 text-xl p-2 pt-0">
          <li>==: Sama dengan</li>
          <li>!=: Tidak sama dengan</li>
          <li>&lt;: Kurang dari</li>
          <li>&gt;: Lebih besar dari</li>
          <li>&le;: Kurang dari atau sama dengan</li>
          <li>&ge;: Lebih besar dari atau sama dengan</li>
        </ul>
      </div>
      <footer className="bg-blue-950 flex justify-between">
        <div className="text-blue-50 text-2xl p-5 justify-center">
          <h1>String dalam Bahasa Pemrograman C</h1>
        </div>
        <a href="/kelas/pemrograman_c/kelas_3">
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
