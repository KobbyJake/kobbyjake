<script>
  let trainings = [
    {
      year: "June 2023",
      institution: "Cambridge Assessment English",
      name: "English Language Proficiency",
      description:
        "IELTS Academic by the British Council.",
      components:
        "Overall Band Score: 7.5 /9, Listening: 8.5/9, Reading: 7.0/9, Writing: 6.5/9, Speaking: 7.5/9 CEFR Level: C1",
    },
    {
      year: "2012-2016",
      institution: "University of Education, Winneba",
      name: "BSc. Information Technology Education",
      description:
        "Cumulative GPA: 3.56/4.00 (Top 10% of the graduating class)",
      components:
        "Courses include Project Management, Research methods, Mathematics (Calculus and Algebra, Discrete Mathematics, Statistics, Numerical Methods and computations), Software Engineering, Data Structures and Algorithms, Database Design and Management, Data Communications and Networks, as well as Distributed Systems",
    },
    {
      year: "2009-2011",
      institution: "University of Education, Winneba",
      name: "B.ED in Basic Education ",
      description:
        "Post diploma with integrated science major.",
      components:
        "Courses include Psychological basis of teaching and learning, MS Applications, Curriculum Practice, Literature for the basic school teacher, Life processes, Introduction to special education, English methodology, Basic linguistics, Basic chemistry and health, Research methods in education, Sociology of education, Instructional methods in science, Basic agricultural science.",
    },
    {
      year: "2003-2007",
      institution: "Komenda College of Education",
      name: "Dip. Basic Education ",
      description:
        "Post diploma with integrated science major.",
      components:
        "Courses include Project Management, Research methods, Mathematics (Calculus and Algebra, Discrete Mathematics, Statistics, Numerical Methods and computations), Software Engineering, Data Structures and Algorithms, Database Design and Management, Data Communications and Networks, as well as Distributed Systems",
    },
    {
      year: "2000-2002",
      institution: "Nsaba Presby. Senior High",
      name: "Senior Secondary Certificate",
      description:
        "General science major.",
      components:
        "Courses include Chemistry, Physics, Biology, Elective Mathematics, English Language, Social Studies, Integrated Science and Core Mathematics",
    },
    // {
    //   year: "1991-1999",
    //   institution: "Agona Kwanyako Holy Redeemer Anglican basic",
    //   name: "Basic Education Certificate",
    //   description:
    //     "General science major.",
    //   components:
    //     "Courses include Project Management, Research methods, Mathematics (Calculus and Algebra, Discrete Mathematics, Statistics, Numerical Methods and computations), Software Engineering, Data Structures and Algorithms, Database Design and Management, Data Communications and Networks, as well as Distributed Systems",
    // },
    
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">Here is my</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        academic and professional <span class="poppins text-violet-400"
          >Certifications</span
        >
      </h3>
    </div>
    <!-- <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p> -->
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each trainings as training, index}
        <div class="flex gap-6 sm:gap-8">
          <div
            class="poppins text-2xl sm:text-3xl md:text-4xl text-slate-500 font-semibold"
          >
            {training.year}
          </div>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
                <i class="fa-solid fa-graduation-cap" /> {training.name}
            </h3>
            <h6
              class="text-large sm:text-xl md:text-2xl poppins text-violet-400"
            >
            <i class="fa-solid fa-school" /> {training.institution}
            </h6>
            <p><i class="fa-solid fa-circle-info fa-xl" /> {training.description} <br /> {training.components}</p>
            <!-- <p>{training.components}</p> -->
          </div>
        </div>
      {/each}
    </div>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
      <p>Scroll to see more &rarr;</p>
    </div>
    <!-- <p class="mx-auto">
      <span class="poppins text-violet-400">Connect</span> with me &darr;
    </p> -->
  </section>
</main>
