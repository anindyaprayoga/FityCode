import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Quiz from "../../../../components/Quiz";

const page = () => {
  const codeString1 = "while (condition) {statement1;statement2;...}";
  const codeString2 =
    'int count = 1;while (count <= 10) {printf("%d ", count);count++;}';
  const codeString3 =
    "for (initialization; condition; increment) {statement1;statement2;...}";
  const codeString4 = 'for (int i = 0; i < 5; i++) {printf("Hello!\n");}';
  const codeString5 = "do {statement1;statement2;...} while (condition);";
  const codeString6 =
    'int count = 1;do {printf("%d ", count);count++;} while (count <= 10);';

  const quizQuestion =
    "Manakah dari pernyataan berikut yang tidak benar mengenai struktur kontrol perulangan dalam bahasa pemrograman C?";
  const quizAnswers = [
    "Struktur kontrol perulangan digunakan untuk mengulang blok kode beberapa kali.",
    "Struktur kontrol perulangan dapat digunakan untuk mengeksekusi blok kode secara bersyarat.",
    "Struktur kontrol perulangan dapat membantu menghemat kode dan membuat program lebih efisien.",
    "Struktur kontrol perulangan hanya dapat digunakan untuk mengulang blok kode yang sama persis.",
    "Struktur kontrol perulangan dapat digunakan untuk mengulang blok kode dengan jumlah iterasi yang ditentukan.",
  ];
  const quizCorrectAnswer =
    "Struktur kontrol perulangan hanya dapat digunakan untuk mengulang blok kode yang sama persis.";

  return (
    <div className="bg-blue-50 items-center">
      <Navbar />
      <h1 className="text-5xl text-stone-950 text-center">
        Struktur Kontrol - Perulangan
      </h1>
      <div className="flex justify-center align-middle p-10">
        <iframe
          width={870}
          height="525"
          src="https://youtube.com/embed/IhVXfbpqXMw"
          frameborder="0"
          className="border-solid border-2 border-stone-800"
        ></iframe>
        <iframe
          width={870}
          height="525"
          src="https://youtube.com/embed/ySinMYQDv0A"
          frameborder="0"
          className="border-solid border-2 border-stone-800"
        ></iframe>
        <iframe
          width={870}
          height="525"
          src="https://youtube.com/embed/mkOlUsdaLqk"
          frameborder="0"
          className="border-solid border-2 border-stone-800"
        ></iframe>
      </div>
      <div className="text-left m-20 p-10 border-solid border-8 border-sky-500 rounded-3xl">
        <h2 className="text-stone-950 text-3xl">Perulangan while</h2>
        <p className="text-stone-950 text-xl p-2">
          Perulangan while digunakan untuk mengulangi blok kode selama kondisi
          yang diberikan benar. Formatnya adalah sebagai berikut:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString1}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2">
          condition: Ekspresi yang menentukan apakah blok kode akan diulang.
          <br /> statement: Blok kode yang akan dieksekusi selama kondisi
          terpenuhi.
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString2}
        </SyntaxHighlighter>
        <h2 className="text-stone-950 text-3xl">Perulangan for</h2>
        <p className="text-stone-950 text-xl p-2">
          Perulangan for digunakan untuk mengulangi blok kode dengan jumlah
          iterasi yang ditentukan. Formatnya adalah sebagai berikut:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString3}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2">
          initialization: Menginisialisasi variabel kontrol sebelum perulangan
          dimulai.
          <br />
          condition: Menentukan apakah blok kode akan diulang.
          <br />
          increment: Memperbarui variabel kontrol setelah setiap iterasi.
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString4}
        </SyntaxHighlighter>
        <h2 className="text-stone-950 text-3xl">Perulangan do-while</h2>
        <p className="text-stone-950 text-xl p-2">
          Perulangan do-while mirip dengan perulangan while, tetapi blok kode
          dieksekusi minimal satu kali sebelum kondisi diperiksa. Formatnya
          adalah sebagai berikut:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString5}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2">
          condition: Ekspresi yang menentukan apakah blok kode akan diulang.
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
        <a href="/kelas/pemrograman_c/kelas_6">
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
