<script>
  import Step from "./Step.svelte";
  let steps = [
    {
      name: "Students' profiler",
      icon: "fa-solid fa-graduation-cap",
      href: "https://kobbyjake.github.io/student_profile_partner/",
      description:
        "Researched and developed a Personal academic information management system for students. Technologies used: Java EE backend and JavaFX frontend packaged into windows installer. In use on U.E.W campuses since 2016.",
    },
    {
      name: "E-voting System",
      icon: "fa-solid fa-check-to-slot",
      href: "https://github.com/KobbyJake",
      description:
        "Programmed an electronic voting system for use in various institutions. The system has been in use since 2019 at J. E. Atta Mills Senior High School in Ghana. Technologies used: Java EE backend and JavaFX frontend",
    },
    {
      name: "Students' info system",
      icon: "fa-solid fa-school",
      href: "https://bitbucket.org/KobbyJake/schonline/src/master/",
      description: "Designed and implemented a School Management System in use at St. Helena’s School Complex. Agona Bobikuma. (2017 to present) and J.E. Atta Mills SHS ( 2017 -2020). Backend technologies used: Node.js and Express.js Frontend technologies: Nuxt.js, Vue.js",
    },
  ];

  let benefits = [
    {
      metric: "10x",
      name: "an avid developer",
      description:
        "I learned about computer programming at the university and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting off with Java and C++ then JavaScript, HTML & CSS as well as Python rescently. I am always evolving my knowledge base to include frameworks, backend programming, design, cloud services and much much more.",
    },
    {
      name: "experienced in teaching",
      description:
        "With a solid background in Information Technology Education from the University of Education, Winneba, I have been teaching ICT at the high school since 2016. I love to find interesting ways in breaking down processes and complex technical concepts into logical chunks that are easy to understand both in the classroom and corperate setting. ",
    },
    {
      name: "an excellent communicator",
      description:
        "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">Hi there!</h2>
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        I'm <span class="poppins text-violet-400">Jake Appiah Baah</span> 
      </h2>
      <!-- <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
        I am an ICT <span class="poppins text-violet-400">Instructor</span>, and a Full
        Stack <span class="poppins text-violet-400">Developer</span>
      </h2> -->
      <p class="text-base sm:text-lg md:text-xl">a computer science enthusiast and an ICT instructor. 
        This platform serves as a window into
        my <a
          href="/academics"
          class="poppins text-violet-400"
        >academic and professional journey
         
        </a>, creative projects, and my
        <a href="/experiences" class="poppins text-violet-400"
          >work experiences</a
        >.
      </p>
      <!-- <p>Find out more about my academic and professional training as well as my work experiences.</p> -->
      <!-- <p> I am an <span class="poppins text-violet-400">ICT Instructor</span>, and a Full
        Stack <span class="poppins text-violet-400">Developer</span>. My <span class="poppins text-violet-400">favorite tech</span> include JavaScript
        (Nuxt.JS or SvelteKit), Python, TailwindCSS, Node.js + Express & PostreSQL</p> -->

      <a
        href="/academics"
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
          <h4 class="relative z-9">Find out more &rarr;</h4>
        
      </a>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src={"images/teacher.svg"}
        alt="profile"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>

  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to see <span class="poppins text-violet-400"> my work?</span>
      </h3>
      <h6 class="text-lg sm:text-xl md:text-2xl">
        A few of my creative endeavors
      </h6>
    </div>
    <!-- <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
      <i class="fa-regular fa-circle-play" />
      <p>Watch the video</p>
    </a> -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          {steps[0].description}
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          {steps[1].description}
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          {steps[2].description}
        </p>
      </Step>
    </div>
  </section>
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">Want to know</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        more <span class="poppins text-violet-400">about me?</span> 
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <!-- <div class="flex flex-col gap-2 mx-auto">
              <div class="flex items-end gap-4">
                  <p
                      class="poppins text-6xl sm:text-7xl md:text-8xl text-slate-500 font-medium"
                  >
                      {benefit.metric}
                  </p>
                  <p
                      class="text-xl sm:text-2xl md:text-3xl capitalize pb-2"
                  >
                      {benefit.name}
                  </p>
              </div>
              <p class="text-center italic">- {benefit.description}</p>
          </div> -->
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {benefit.name}
            </h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
      <p>Scroll to see more &rarr;</p>
    </div>
    <!-- <p class="mx-auto"><span class="poppins text-violet-400">Connect</span> with me &darr;</p> -->
  </section>
</main>
