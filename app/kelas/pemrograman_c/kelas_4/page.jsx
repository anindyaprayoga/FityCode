import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Quiz from "../../../../components/Quiz";

const page = () => {
  const codeString1 =
    "if (condition) {statement1;statement2;...} else {statement3;statement4;...}";
  const codeString2 =
    'int age = 20;if (age >= 18) {printf("You are an adult.\n");} else {printf("You are a minor.\n");}';
  const codeString3 =
    "switch (expression) {case value1:statement1;statement2;...break;case value2:statement3;statement4;...break;default:statement5;statement6;...}";
  const codeString4 =
    "char grade = 'B';switch (grade) {case 'A':printf(\"Excellent!\n\");break;case 'B':printf(\"Good!\n\");break;case 'C':printf(\"Average.\n\");break;default:printf(\"Invalid grade.\n\");}";

  const quizQuestion =
    "Pernyataan switch-case digunakan untuk mengeksekusi blok kode tertentu berdasarkan nilai variabel yang dibandingkan dengan beberapa nilai yang mungkin. Manakah dari pernyataan berikut yang tidak benar mengenai pernyataan switch-case?";
  const quizAnswers = [
    "Pernyataan switch-case hanya dapat digunakan untuk membandingkan nilai numerik.",
    "Pernyataan switch-case dapat digunakan untuk membandingkan nilai string.",
    "Pernyataan switch-case dapat digunakan untuk membandingkan nilai boolean.",
    "Pernyataan switch-case selalu memiliki blok kode default.",
    "Pernyataan switch-case dapat digunakan untuk membandingkan nilai array.",
  ];
  const quizCorrectAnswer =
    "Pernyataan switch-case selalu memiliki blok kode default.";

  return (
    <div className="bg-blue-50 items-center">
      <Navbar />
      <h1 className="text-5xl text-stone-950 text-center">
        Struktur Kontrol - Percabangan
      </h1>
      <div className="flex justify-center align-middle p-10">
        <iframe
          width={870}
          height="525"
          src="https://youtube.com/embed/T_XIe21L-Z0"
          frameborder="0"
          className="border-solid border-2 border-stone-800"
        ></iframe>
        <iframe
          width={870}
          height="525"
          src="https://youtube.com/embed/AomaqWTZeCM"
          frameborder="0"
          className="border-solid border-2 border-stone-800"
        ></iframe>
      </div>
      <div className="text-left m-20 p-10 border-solid border-8 border-sky-500 rounded-3xl">
        <h2 className="text-stone-950 text-3xl">Pernyataan if-else()</h2>
        <p className="text-stone-950 text-xl p-2">
          Pernyataan if-else digunakan untuk mengeksekusi blok kode tertentu
          berdasarkan kondisi yang benar atau salah. Formatnya adalah sebagai
          berikut:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString1}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2">
          condition: Ekspresi yang menentukan apakah blok kode if akan
          dieksekusi.
          <br /> statement1: Blok kode yang akan dieksekusi jika condition
          benar.
          <br /> statement3: Blok kode yang akan dieksekusi jika condition
          salah.
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString2}
        </SyntaxHighlighter>
        <h2 className="text-stone-950 text-3xl">Pernyataan switch-case</h2>
        <p className="text-stone-950 text-xl p-2">
          Pernyataan switch-case digunakan untuk mengeksekusi blok kode tertentu
          berdasarkan nilai variabel yang dibandingkan dengan beberapa nilai
          yang mungkin. Formatnya adalah sebagai berikut:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString3}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2">
          expression: Nilai variabel yang akan dibandingkan.
          <br /> value1: Nilai yang dibandingkan dengan expression.
          <br /> statement1: Blok kode yang akan dieksekusi jika expression sama
          dengan value1.
          <br />
          value2: Nilai yang dibandingkan dengan expression.
          <br /> statement3: Blok kode yang akan dieksekusi jika expression sama
          dengan value2.
          <br /> default: Blok kode yang akan dieksekusi jika tidak ada nilai
          yang cocok dengan expression.
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString4}
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
        <a href="/kelas/pemrograman_c/kelas_5">
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
