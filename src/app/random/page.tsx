import { deleteData, getData, saveData, updateData } from '@/utils/handleDatabase'

export default async function Home() {
  const data = await getData()

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomQuote = data[randomIndex];

  return (
    <div className="bg-olive min-h-screen w-full flex flex-col items-center justify-center gap-2">
      <div className='flex flex-col m-2 items-center text-oliveText'>
        <a href="/adminPage">Go to admin page!</a>
        <a href="/">Go to all quotes!</a>
      </div>


      <div className='flex flex-col items-center justify-center'>
        <div className='flex gap-2 flex-col bg-grayWhiet p-6'>
          <div key={randomQuote.quote}>
            <div className='bg-oliveShade gap-10 px-4 py-1 rounded-t-lg text-xl'>{randomQuote.quote} </div>
            <div className='bg-oliveShade gap-10 px-4 py-1 rounded-b-lg'>- {randomQuote.author}</div>
          </div>
        </div>
      </div>


    </div>
  );
}
