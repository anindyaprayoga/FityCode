import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Quiz from "../../../../components/Quiz";

const page = () => {
  const codeString1 = "type_name array_name[size];";
  const codeString2 =
    "int numbers[5]; // Deklarasi array 'numbers' dengan tipe data integer dan 5 elemen";
  const codeString3 =
    "type_name array_name[size] = {value1, value2, ..., valueN};";
  const codeString4 =
    "int numbers[5] = {10, 20, 30, 40, 50}; // Inisialisasi array 'numbers' dengan nilai awal 10, 20, 30, 40, dan 50";
  const codeString5 = "array_name[index]";
  const codeString6 =
    'int numbers[5] = {10, 20, 30, 40, 50};printf("First element: %d\n", numbers[0]); // Mengakses dan menampilkan elemen pertama (index 0)printf("Third element: %d\n", numbers[2]); // Mengakses dan menampilkan elemen ketiga (index 2)';
  const codeString7 =
    'int numbers[5] = {10, 20, 30, 40, 50};int sum = 0;for (int i = 0; i < 5; i++) {sum += numbers[i];}printf("Total sum: %d\n", sum); // Menghitung dan menampilkan jumlah elemen array';

  const quizQuestion =
    "Manakah dari berikut ini yang bukan merupakan ciri-ciri array dalam bahasa pemrograman C?";
  const quizAnswers = [
    "Digunakan untuk menyimpan kumpulan data dengan tipe data yang sama.",
    "Elemen-elemennya diakses menggunakan indeks.",
    "Dapat diubah ukurannya setelah dideklarasikan.",
    "Memori yang dialokasikan untuk array bersifat statis.",
  ];
  const quizCorrectAnswer = "Dapat diubah ukurannya setelah dideklarasikan.";

  return (
    <div className="bg-blue-50 items-center">
      <Navbar />
      <h1 className="text-5xl text-stone-950 text-center">
        Array dalam Bahasa Pemrograman C
      </h1>
      <div className="flex justify-center align-middle p-10">
        <iframe
          width={870}
          height="525"
          src="https://youtube.com/embed/TuYhKMCIG5M"
          frameborder="0"
          className="border-solid border-2 border-stone-800"
        ></iframe>
      </div>
      <div className="text-left m-20 p-10 border-solid border-8 border-sky-500 rounded-3xl">
        <h2 className="text-stone-950 text-3xl">Deklarasi Array</h2>
        <p className="text-stone-950 text-xl p-2">
          Deklarasi array digunakan untuk memberitahu compiler tentang tipe
          data, nama, dan jumlah elemen array. Format deklarasi array adalah
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
          type_name: Tipe data elemen array.
          <br />
          array_name: Nama array.
          <br />
          size: Jumlah elemen array.
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString2}
        </SyntaxHighlighter>
        <h2 className="text-stone-950 text-3xl">Inisialisasi Array</h2>
        <p className="text-stone-950 text-xl p-2">
          Inisialisasi array digunakan untuk memberikan nilai awal kepada elemen
          array saat dideklarasikan. Format inisialisasi array adalah sebagai
          berikut:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString3}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2">
          type_name: Tipe data elemen array.
          <br />
          array_name: Nama array.
          <br />
          size: Jumlah elemen array.
          <br />
          value: Nilai awal untuk elemen array.
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString4}
        </SyntaxHighlighter>
        <h2 className="text-stone-950 text-3xl">Mengakses Elemen Array</h2>
        <p className="text-stone-950 text-xl p-2">
          Untuk mengakses elemen array, Anda dapat menggunakan operator indeks.
          Formatnya adalah sebagai berikut:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString5}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2">
          array_name: Nama array.
          <br />
          index: Indeks elemen array (dimulai dari 0).
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString6}
        </SyntaxHighlighter>
        <h2 className="text-stone-950 text-3xl">Penggunaan Array</h2>
        <p className="text-stone-950 text-xl p-2">
          Array dapat digunakan untuk berbagai keperluan, seperti menyimpan
          data, menghitung nilai, dan mengolah data. Anda dapat menggunakan loop
          untuk mengakses dan memanipulasi elemen array secara efisien.
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
        <a href="/kelas/pemrograman_c/kelas_8">
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
