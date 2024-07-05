import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Quiz from "../../../../components/Quiz";

const page = () => {
  const codeString1 = "scanf(format_string, variable_address, ...);";
  const codeString2 =
    "int age;scanf(\"%d\", &age); // Membaca input bilangan bulat dan menyimpannya dalam variabel 'age'";
  const codeString3 = "printf(format_string, argument1, argument2, ...);";
  const codeString4 =
    'char name[20];\nprintf("Enter your name: ");\nscanf("%s", name);\nprintf("Hello, %s!\\n", name); // Menampilkan pesan "Hello, [nama]"';

  const quizQuestion =
    "Manakah dari berikut ini yang digunakan untuk menampilkan informasi ke layar?";
  const quizAnswers = ["scanf()", "printf()", "getchar()", "putchar()"];
  const quizCorrectAnswer = "printf()";

  return (
    <div className="bg-blue-50 items-center">
      <Navbar />
      <h1 className="text-5xl text-stone-950 text-center">
        Input dan Output Data
      </h1>
      <div className="flex justify-center align-middle p-10">
        <iframe
          width={870}
          height="525"
          src="https://youtube.com/embed/Q5oxbNV9qCs"
          frameborder="0"
          className="border-solid border-2 border-stone-800"
        ></iframe>
      </div>
      <div className="text-left m-20 p-10 border-solid border-8 border-sky-500 rounded-3xl">
        <h2 className="text-stone-950 text-3xl">Input dan output data</h2>
        <p className="text-stone-950 text-xl p-2">
          Fungsi scanf() digunakan untuk membaca input dari pengguna dan
          menyimpannya dalam variabel. Fungsi ini memiliki format berikut:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString1}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2">
          format_string: Menentukan format data yang akan dibaca. <br />
          variable_address: Alamat variabel tempat data akan disimpan.
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString2}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2">
          Fungsi printf() digunakan untuk menampilkan informasi ke layar. Fungsi
          ini memiliki format berikut:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString3}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2">
          format_string: Menentukan format data yang akan ditampilkan. <br />{" "}
          argument: Nilai yang akan ditampilkan.
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
        <a href="/kelas/pemrograman_c/kelas_4">
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
