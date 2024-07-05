import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Quiz from "../../../../components/Quiz";

const page = () => {
  const codeString1 = 'char str1[] = "Hello, World!";';
  const codeString2 =
    'char *str2 = (char *) malloc(100);strcpy(str2, "This is a dynamic string.");';
  const codeString3 =
    "strlen(): Menghitung panjang \n string.strcpy(): Menyalin string ke string lain. \n strcat(): Menggabungkan dua string. \n strcmp(): Membandingkan dua string. \n strtok(): Memisahkan string berdasarkan token.";
  const codeString4 =
    'char str1[] = "Programming in C"; \n char str2[20];int len = strlen(str1); \n printf("Length of str1: %d", len); \n strcpy(str2, str1); \n printf("str2 after copying: %s", str2); \n strcat(str2, " is fun!"); \n printf("str2 after concatenation: %s", str2); \n int result = strcmp(str1, str2); \n if (result == 0) {printf("str1 and str2 are equal.");} else if (result < 0) {printf("str1 is less than str2.\n");} else {printf("str1 is greater than str2.\n");}char *token = strtok(str1, " ");while (token != NULL) {printf("%s\n", token);token = strtok(NULL, " ");}';
  const codeString5 =
    'char name[50];printf("Enter your name: ");scanf("%s", name);printf("Hello, %s!\n", name);';
  const codeString6 =
    'char message[] = "This is a message.";printf("%s\n", message);';

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
        String dalam Bahasa Pemrograman C
      </h1>
      {/* <div className="flex justify-center align-middle p-10">
        <iframe
          width={870}
          height="525"
          src="#"
          frameborder="0"
          className="border-solid border-2 border-stone-800"
        ></iframe>
      </div> */}
      <div className="text-left m-20 p-10 border-solid border-8 border-sky-500 rounded-3xl">
        <h2 className="text-stone-950 text-3xl">
          Deklarasi dan Inisialisasi String
        </h2>
        <p className="text-stone-950 text-xl p-2">
          String dapat dideklarasikan dan diinisialisasi dengan berbagai cara.
          Berikut adalah beberapa contoh: Deklarasi dan inisialisasi dengan
          literal string:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString1}
        </SyntaxHighlighter>
        <p className="text-stone-950 text-xl p-2">
          Deklarasi dengan alokasi memori dinamis:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString2}
        </SyntaxHighlighter>
        <h2 className="text-stone-950 text-3xl">Fungsi String Standar</h2>
        <p className="text-stone-950 text-xl p-2">
          Bahasa C menyediakan berbagai fungsi standar untuk memanipulasi
          string. Berikut adalah beberapa contoh:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString3}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString4}
        </SyntaxHighlighter>
        <h2 className="text-stone-950 text-3xl">Input dan Output String</h2>
        <p className="text-stone-950 text-xl p-2">
          Anda dapat menggunakan fungsi scanf() dan printf() untuk membaca dan
          menulis string dari dan ke konsol. Berikut adalah beberapa
          contoh:Membaca string dari konsol:
        </p>
        <SyntaxHighlighter
          language="c"
          style={atomOneDark}
          className="text-left"
        >
          {codeString5}
        </SyntaxHighlighter>
        <h2 className="text-stone-950 text-3xl">Menulis string ke konsol:</h2>
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
      <Footer />
    </div>
  );
};

export default page;
