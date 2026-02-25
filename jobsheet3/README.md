# 📘 Praktikum Next.js — Jobsheet 3

> Materi: Routing, Dynamic Routing, Komponen Navbar, dan Layout Global (App Shell)

---

## 📋 Daftar Isi

- [1. Routing Dasar](#1-routing-dasar-static-routing)
- [2. Routing Menggunakan Folder](#2-routing-menggunakan-folder)
- [3. Nested Routing](#3-nested-routing)
- [4. Dynamic Routing](#4-dynamic-routing)
- [5. Komponen Navbar](#5-membuat-komponen-navbar)
- [6. Layout Global (App Shell)](#6-membuat-layout-global-app-shell)
- [7. Implementasi Layout di _app.tsx](#7-implementasi-layout-di-_apptsx)
- [Tugas](#-tugas)
- [Pertanyaan Refleksi](#-pertanyaan-refleksi)

---

## 1. Routing Dasar (Static Routing)

### a. Tambahkan halaman `about`

![Tambah halaman about](assets/image1.png)

### b. Uji di browser

![Hasil di browser](assets/image2.png)

---

## 2. Routing Menggunakan Folder

### a. Rapikan struktur `pages`

![Struktur pages](assets/image3.png)

### b. Akses dari browser

![Akses dari browser](assets/image4.png)

---

## 3. Nested Routing

### a. Buat folder `setting`

![Buat folder setting](assets/image5.png)

**Modifikasi kode:**

![Modifikasi kode 1](assets/image6.png)
![Modifikasi kode 2](assets/image7.png)

**Akses di browser:**

![Akses setting 1](assets/image8.png)
![Akses setting 2](assets/image9.png)

**Modifikasi struktur folder:**

![Struktur folder 1](assets/image10.png)
![Struktur folder 2](assets/image11.png)

### b. Nested lebih dalam

![Nested lebih dalam](assets/image12.png)

**Akses di browser:**

![Akses nested](assets/image13.png)

---

## 4. Dynamic Routing

### a. Buat halaman `produk`

![Struktur halaman produk](assets/image14.png)

**`index.tsx`:**

![index.tsx](assets/image15.png)
![Hasil index](assets/image17.png)

**`[id].tsx`:**

![id.tsx](assets/image16.png)
![Hasil id 1](assets/image18.png)
![Hasil id 2](assets/image19.png)

---

## 5. Membuat Komponen Navbar

### a. Struktur komponen

![Struktur komponen navbar](assets/image20.png)

**`index.tsx`:**

![index.tsx navbar](assets/image21.png)

**`globals.css`:**

![globals.css](assets/image22.png)

**Hasil:**

![Hasil navbar](assets/image23.png)

### b. Navbar tampil di semua page

![Modifikasi _app.tsx](assets/image24.png)

**Hasil:**

![Navbar di semua page](assets/image25.png)

---

## 6. Membuat Layout Global (App Shell)

### a. Buat `AppShell`

![AppShell](assets/image26.png)

---

## 7. Implementasi Layout di `_app.tsx`

![Implementasi _app.tsx 1](assets/image27.png)
![Implementasi _app.tsx 2](assets/image28.png)

---

## 📝 Tugas

### 1. Routing

![Tugas routing 1](assets/image29.png)
![Tugas routing 2](assets/image30.png)

### 2. Dynamic Routing

![Tugas dynamic routing 1](assets/image31.png)
![Tugas dynamic routing 2](assets/image32.png)

### 3. Footer Layout

![Tugas footer 1](assets/image33.png)
![Tugas footer 2](assets/image34.png)

---

## 💬 Pertanyaan Refleksi

### 1. Apa perbedaan routing berbasis file dan routing manual?

Jika **routing berbasis file**, rute ditentukan berdasarkan susunan folder/direktori dan file-nya — cukup buat file di dalam folder `pages`, maka rute otomatis tersedia.

Jika **routing manual**, rute ditentukan secara eksplisit menggunakan kode: menentukan path URL-nya, aturan yang berlaku, serta file mana yang bertanggung jawab menampilkan view untuk URL tersebut.

---

### 2. Mengapa dynamic routing penting dalam aplikasi web?

Dynamic routing memungkinkan satu halaman menangani banyak variasi URL, sehingga bisa digunakan untuk menampilkan data yang berbeda-beda (misalnya detail produk, artikel blog, dsb.) tanpa harus membuat file terpisah untuk setiap halaman.

---

### 3. Apa keuntungan menggunakan layout global dibanding memanggil komponen satu per satu?

Dengan layout global (`AppShell`), perubahan pada komponen seperti `Navbar` atau `Footer` cukup dilakukan di satu tempat saja. Tanpa layout global, setiap perubahan harus direplikasi ke seluruh file halaman secara manual, yang rawan kesalahan dan tidak efisien.