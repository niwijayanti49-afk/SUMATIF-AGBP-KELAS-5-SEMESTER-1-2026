import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas V)
 * Mata Pelajaran: Agama Hindu Dan Budi Pekerti
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Agama Hindu Dan Budi Pekerti Kelas V
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  // BAB I: MEMAHAMI WEDA SRUTI (1 - 10)
  1: {
    elemen: 'Memahami Weda Sruti',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengertian kitab suci Weda secara etimologis.',
    indikatorSoal:
      'Disajikan ilustrasi Maharsi menerima wahyu suci, peserta didik dapat menentukan arti kata "Weda" dari akar kata "Vid".',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Memahami Weda Sruti',
    tujuanPembelajaran:
      'Peserta didik dapat menyebutkan para Maharsi penerima wahyu kitab suci Weda.',
    indikatorSoal:
      'Disajikan narasi diturunkannya wahyu Weda oleh Ida Sang Hyang Widhi Wasa, peserta didik dapat menyebutkan sebutan bagi tujuh Maharsi penerima wahyu Weda.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Memahami Weda Sruti',
    tujuanPembelajaran:
      'Peserta didik dapat memahami pengertian Weda Sruti dan sifat kewahyuan kitab Weda.',
    indikatorSoal:
      'Disajikan penjelasan tentang Sruti dan istilah Apauruseya, peserta didik dapat menentukan makna sifat wahyu Apauruseya pada kitab Weda.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Memahami Weda Sruti',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi bahasa, aksara, dan tokoh penyusun kodifikasi Weda.',
    indikatorSoal:
      'Disajikan informasi mengenai bahasa Daiwi Wak, Sanskerta, dan huruf Dewanagari, peserta didik dapat menentukan tokoh suci penyusun kodifikasi kitab Weda.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Memahami Weda Sruti',
    tujuanPembelajaran:
      'Peserta didik dapat menyebutkan pengelompokan Weda Sruti menurut Bhagawan Manu.',
    indikatorSoal:
      'Disajikan pertanyaan mengenai klasifikasi Weda Sruti menurut Bhagawan Manu, peserta didik dapat menentukan tiga kelompok utama Weda Sruti dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Memahami Weda Sruti',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan bagian-bagian Catur Weda Samhita beserta ciri-cirinya.',
    indikatorSoal:
      'Disajikan ciri kitab berisi puji-pujian kepada para Dewa, penghimpun Maharsi Pulaha, pendeta Hotri, dan jumlah 10.589 mantra, peserta didik dapat mengidentifikasi kitab Reg Weda.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Memahami Weda Sruti',
    tujuanPembelajaran:
      'Peserta didik dapat memahami isi dan fungsi Sama Weda dalam kegiatan persembahyangan.',
    indikatorSoal:
      'Disajikan ilustrasi kegiatan melantunkan lagu pujaan saat sembahyang dan ciri penghimpun Maharsi Jaimini, peserta didik dapat menentukan kitab Sama Weda.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Memahami Weda Sruti',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis perbedaan ciri kitab Yajur Weda dan Atharwa Weda.',
    indikatorSoal:
      'Disajikan dua deskripsi karakteristik mantra yadnya dan mantra magis/keselamatan beserta jumlah mantranya, peserta didik dapat memasangkan kitab Yajur Weda dan Atharwa Weda secara berurutan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Memahami Weda Sruti',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi bagian Brahmana serta Upanisad dan Aranyaka dalam Weda Sruti.',
    indikatorSoal:
      'Disajikan ciri bagian Jnana Kanda yang terdiri atas 108 kitab dan disebut Wedanta, peserta didik dapat menentukan kitab Upanisad dan Aranyaka.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Memahami Weda Sruti',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis penerapan ajaran Weda Sruti dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan pilihan perilaku di rumah, sekolah, alam, dan sesama, peserta didik dapat menentukan contoh penerapan ajaran Weda Sruti yang paling tepat.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // BAB II: MEMAHAMI BHUANA AGUNG (11 - 20)
  11: {
    elemen: 'Memahami Bhuana Agung',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengertian Bhuana Agung sebagai alam semesta ciptaan Hyang Widhi Wasa.',
    indikatorSoal:
      'Disajikan gambar ilustrasi jagat raya dan penjelasan makrokosmos di luar diri manusia, peserta didik dapat menentukan istilah Bhuana Agung.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Memahami Bhuana Agung',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi manifestasi Hyang Widhi Wasa yang mengatur proses terciptanya Bhuana Agung.',
    indikatorSoal:
      'Disajikan narasi proses evolusi kosmis alam semesta, peserta didik dapat menentukan manifestasi Hyang Widhi Wasa sebagai Tri Murti.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Memahami Bhuana Agung',
    tujuanPembelajaran:
      'Peserta didik dapat memahami siklus penciptaan alam semesta (Pralina/Pralaya, Pratipta, dan Utpeti).',
    indikatorSoal:
      'Disajikan narasi siklus Samsara alam semesta (Prakempa), peserta didik dapat menentukan tahap peleburan kembali ke asalnya dan tahap penciptaan kembali secara berturut-turut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Memahami Bhuana Agung',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan peran unsur Purusa dan Pradhana dalam penciptaan Bhuana Agung.',
    indikatorSoal:
      'Disajikan uraian aliran Sankhya tentang awal penciptaan alam semesta, peserta didik dapat membedakan pengertian Purusa dan Pradhana secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Memahami Bhuana Agung',
    tujuanPembelajaran:
      'Peserta didik dapat mengurutkan tahapan terbentuknya Bhuana Agung (evolusi kosmis) menurut filsafat Sankhya.',
    indikatorSoal:
      'Disajikan empat pilihan urutan tahapan kosmis setelah kehendak Brahman, peserta didik dapat menganalisis dan memilih urutan evolusi kosmis yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Memahami Bhuana Agung',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengertian Pancamahabhuta sebagai lima unsur pembentuk alam semesta.',
    indikatorSoal:
      'Disajikan gambar ilustrasi lima unsur alam (tanah, air, matahari/api, angin, dan langit), peserta didik dapat mengidentifikasi konsep Pancamahabhuta.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Memahami Bhuana Agung',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi wujud dan peran unsur Prthiwi di Bhuana Agung.',
    indikatorSoal:
      'Disajikan contoh kenampakan alam berwujud padat seperti gunung, daratan, pasir, dan bebatuan, peserta didik dapat menentukan unsur Prthiwi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Memahami Bhuana Agung',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi wujud dan peran unsur Apah dalam menjaga kehidupan di bumi.',
    indikatorSoal:
      'Disajikan uraian tentang samudra, sungai, danau, air hujan, dan uap air, peserta didik dapat menentukan unsur Apah dalam Pancamahabhuta.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Memahami Bhuana Agung',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis peran unsur Teja dan Bayu dalam peristiwa alam sehari-hari.',
    indikatorSoal:
      'Disajikan peristiwa sinar matahari yang menghangatkan bumi dan hembusan angin yang menggerakkan awan, peserta didik dapat menentukan pasangan unsur Teja dan Bayu.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Memahami Bhuana Agung',
    tujuanPembelajaran:
      'Peserta didik dapat memahami fungsi unsur Akasa sebagai penyedia ruang bagi unsur alam lainnya.',
    indikatorSoal:
      'Disajikan deskripsi unsur ruang kosong atau ether yang menjadi tempat beroperasinya keempat unsur lainnya, peserta didik dapat menentukan unsur Akasa.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // BAB III: MEMAHAMI AJARAN CATUR GURU (21 - 30)
  21: {
    elemen: 'Memahami Ajaran Catur Guru',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengertian Catur Guru secara etimologis.',
    indikatorSoal:
      'Disajikan asal-usul kata Catur Guru dari bahasa Sanskerta, peserta didik dapat menentukan arti Catur Guru sebagai empat pembimbing utama yang mulia.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Memahami Ajaran Catur Guru',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengertian dan peran Guru Swadhyaya.',
    indikatorSoal:
      'Disajikan deskripsi guru sejati pertama dan utama pencipta alam semesta serta pemberi wahyu Weda, peserta didik dapat menentukan bagian Guru Swadhyaya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Memahami Ajaran Catur Guru',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan cara menghormati Guru Swadhyaya dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan ilustrasi kegiatan sembahyang Tri Sandhya dan berdoa sebelum belajar di sekolah, peserta didik dapat mengidentifikasi wujud bhakti kepada Guru Swadhyaya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Memahami Ajaran Catur Guru',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengertian dan peran Guru Rupaka.',
    indikatorSoal:
      'Disajikan gambar siswa berpamitan dengan sopan kepada ayah dan ibu, peserta didik dapat menentukan peran orang tua sebagai Guru Rupaka.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Memahami Ajaran Catur Guru',
    tujuanPembelajaran:
      'Peserta didik dapat menunjukkan sikap berbakti kepada Guru Rupaka di lingkungan keluarga.',
    indikatorSoal:
      'Disajikan situasi nyata seorang anak melihat ibunya membersihkan halaman rumah, peserta didik dapat memilih perilaku bakti kepada Guru Rupaka yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Memahami Ajaran Catur Guru',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengertian dan peran Guru Pengajian.',
    indikatorSoal:
      'Disajikan gambar guru sedang mengajar siswa kelas V di ruang kelas, peserta didik dapat menentukan peran pendidik di sekolah sebagai Guru Pengajian.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Memahami Ajaran Catur Guru',
    tujuanPembelajaran:
      'Peserta didik dapat menunjukkan cara menghormati Guru Pengajian di sekolah.',
    indikatorSoal:
      'Disajikan beberapa contoh perilaku siswa, peserta didik dapat memilih contoh perilaku menghormati Guru Pengajian di lingkungan sekolah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Memahami Ajaran Catur Guru',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengertian dan peran Guru Wisesa.',
    indikatorSoal:
      'Disajikan peran pembuat undang-undang, penjaga ketertiban, dan penyedia fasilitas umum seperti jalan raya dan rumah sakit, peserta didik dapat menentukan Guru Wisesa.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Memahami Ajaran Catur Guru',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan cara menghormati Guru Wisesa dalam kehidupan bermasyarakat.',
    indikatorSoal:
      'Disajikan cerita siswa memakai helm dan menaati lampu lalu lintas saat berangkat sekolah, peserta didik dapat mengidentifikasi wujud hormat kepada Guru Wisesa.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Memahami Ajaran Catur Guru',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dan mengklasifikasikan penerapan keempat bagian Catur Guru dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan empat aktivitas harian siswa secara berurutan, peserta didik dapat menganalisis dan memasangkan masing-masing aktivitas dengan bagian Catur Guru yang sesuai.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen = q.elemen || (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif || (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan ajaran ${q.topic} dalam kehidupan sehari-hari.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus mengenai ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (
    t.includes('weda') ||
    t.includes('sruti') ||
    t.includes('mantra') ||
    t.includes('brahmana') ||
    t.includes('upanisad')
  ) {
    return 'Memahami Weda Sruti';
  }
  if (
    t.includes('bhuana') ||
    t.includes('pancamahabhuta') ||
    t.includes('kosmis') ||
    t.includes('prthiwi') ||
    t.includes('apah') ||
    t.includes('teja') ||
    t.includes('bayu') ||
    t.includes('akasa') ||
    t.includes('purusa') ||
    t.includes('siklus')
  ) {
    return 'Memahami Bhuana Agung';
  }
  if (t.includes('guru')) {
    return 'Memahami Ajaran Catur Guru';
  }
  return 'Memahami Weda Sruti';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
