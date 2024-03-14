const Paragraph = ({ info, value }) => {
  return (
    <p className='text-lg text-slate-300'>{info}: <strong className='text-white'>{value}</strong></p>
  )
}

export default Paragraph;
