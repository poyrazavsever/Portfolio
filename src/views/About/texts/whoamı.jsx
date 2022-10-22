import React from 'react'
import {useSelector} from "react-redux"

function WhoAmI() {

    const count = useSelector((state) => state.counter.language)
  return (
    <p className='abouttext'>
      {count === "en" ? "I'm Poyraz Avsever. I have been interested in software and design since I was a child and trying to improve myself. I decided to turn my interest and curiosity about software into my future profession. Although I have been interested in this field for a long time, I have been developing projects and learning something for the last 1 year. Along with software, I am also interested in football, music and mathematics." : "Ben Poyraz Avsever. Çocukluğumdan beri yazılım ve tasarımla ilgileniyorum ve kendimi geliştirmeye çalışıyorum. Yazılıma olan ilgimi ve merakımı gelecekteki mesleğim haline getirmeye karar verdim. Uzun zamandır bu alana ilgim olmasına rağmen son 1 yıldır projeler geliştiriyor ve bir şeyler öğreniyorum. Yazılımın yanı sıra futbol, müzik ve matematikle de ilgileniyorum."}
    </p>
  )
}

export default WhoAmI