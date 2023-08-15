import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
     <h1 className='head_text text-center'>
      Share Your Opinions
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center block'>It Matters</span>
    </h1>
    <p className='desc text-center'>
    IThinkSo is your platform to unleash your thoughts, unfiltered and unrestrained. Let your voice resonate in a space where opinions take center stage.
    </p>
    <Feed />
  </section>
);

export default Home;