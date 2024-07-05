import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Quiz from "../../../../components/Quiz";

const page = () => {
  const codeString1 = "return_type function_name(parameter1, parameter2, ...);";
  const codeString2 =
    "int addNumbers(int num1, int num2); // Deklarasi fungsi yang mengembalikan nilai integer dan menerima dua parameter integer";
  const codeString3 =
    "return_type function_name(parameter1, parameter2, ...) {statement1;statement2;...return returnValue;}";
  const codeString4 =
    "int addNumbers(int num1, int num2) {int sum = num1 + num2;return sum;}";
  const codeString5 = "returnValue = function_name(argument1, argument2, ...);";
  const codeString6 =
    "int result = addNumbers(10, 20); // Memanggil fungsi addNumbers dan menyimpan hasilnya dalam variabel 'result'printf(\"The sum is: %d\n\", result); // Menampilkan nilai yang dikembalikan oleh fungsi";

  const quizQuestion =
    "Manakah dari berikut ini yang bukan merupakan bagian dari deklarasi fungsi?";
  const quizAnswers = [
    "Tipe data yang dikembalikan",
    "Nama fungsi",
    "Nilai yang dikembalikan",
    "Parameter fungsi",
  ];
  const quizCorrectAnswer = "Nilai yang dikembalikan";

  return (
    <div className="bg-blue-50 items-center">
      <Navbar />
      <h1 className="text-5xl text-stone-950 text-center">
        Fungsi dalam Bahasa Pemrograman C
      </h1>
      <div className="flex justify-center align-middle p-10">
        <iframe
          width={870}
          height="525"
          src="https://youtube.com/embed/jPY-kfUx51s"
          frameborder="0"
          className="border-solid border-2 border-stone-800"
        ></iframe>
      </div>
      <div className="text-left m-20 p-10 border-solid border-8 border-sky-500 rounded-3xl">
        <h2 className="text-stone-950 text-3xl">Deklarasi Fungsi</h2>
        <p className="text-stone-950 text-xl p-2">
          Deklarasi fungsi digunakan untuk memberitahu compiler tentang nama,
          tipe return, dan parameter fungsi. Format deklarasi fungsi adalah
          sebagai berikut:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString1}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2">
          return_type: Tipe data yang dikembalikan oleh fungsi.
          <br />
          function_name: Nama fungsi.
          <br />
          parameter: Tipe data dan variabel yang digunakan oleh fungsi.
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString2}
        </SyntaxHighlighter>
        <h2 className="text-stone-950 text-3xl">Definisi Fungsi</h2>
        <p className="text-stone-950 text-xl p-2">
          Definisi fungsi berisi implementasi kode dari fungsi yang telah
          dideklarasikan. Format definisi fungsi adalah sebagai berikut:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString3}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2">
          return_type: Tipe data yang dikembalikan oleh fungsi.
          <br />
          function_name: Nama fungsi.
          <br />
          parameter: Tipe data dan variabel yang digunakan oleh fungsi.
          <br />
          statement: Pernyataan-pernyataan yang akan dieksekusi ketika fungsi
          dipanggil.
          <br />
          returnValue: Nilai yang dikembalikan oleh fungsi.
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString4}
        </SyntaxHighlighter>
        <h2 className="text-stone-950 text-3xl">Memanggil Fungsi</h2>
        <p className="text-stone-950 text-xl p-2">
          Untuk menjalankan fungsi, Anda perlu memanggilnya dengan nama dan
          argumen yang sesuai. Format pemanggilan fungsi adalah sebagai berikut:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString5}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2">
          returnValue: Variabel untuk menyimpan nilai yang dikembalikan oleh
          fungsi.
          <br />
          function_name: Nama fungsi yang ingin dipanggil.
          <br />
          argument: Nilai yang diteruskan ke parameter fungsi.
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString6}
        </SyntaxHighlighter>
      </div>
      <Quiz
        question={quizQuestion}
        answers={quizAnswers}
        correctAnswer={quizCorrectAnswer}
      />
      <footer className="bg-blue-950 flex justify-between">
        <div className="text-blue-50 text-2xl p-5 justify-center">
          <h1>String dalam Bahasa Pemrograman C</h1>
        </div>
        <a href="/kelas/pemrograman_c/kelas_7">
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
