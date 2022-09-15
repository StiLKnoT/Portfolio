import React from 'react'
import './Skill.css'
import kozimxon from "../../img/kozimxon.png";
import taqi from "../../img/taqi.png";
import smm from "../../img/smm.png";
import bolajon from "../../img/bolajon.png";
import JS from "../../img/JS.png";


// import {ReactComponents as Sass} from '../../img/sass.svg'
// import {ReactComponents as Css} from '../../img/css.svg'


function Skills() {
  return (
    <div className='skills'>
   
      
      <article className="wrapper">
        <div className="marquee">
          <div className="marquee__group">

            
            {/* <svg>
                <Sass/>
            </svg>
            <svg>
                <Css/>
            </svg> */}
          {/* <svg> */}
            <img src="https://i.pinimg.com/564x/93/42/44/9342444603bb53e2144bde19c12ed459.jpg" style={{objectFit: "cover"}}/>
            <img src="https://i.pinimg.com/564x/5e/06/3c/5e063c477e797d46fc6edb6c9fa10bf4.jpg" style={{objectFit: "cover"}}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmG8-YWXTGN7BCfAryRDigUdCY6ypJ68IEUUPjdIda8r-dhTcUSSxYhpouR2_MdG-VGQ&usqp=CAU" style={{objectFit: "cover"}}/>
            <img src="https://i.pinimg.com/564x/32/ce/34/32ce3442146f59d52c21ead717d6d1d1.jpg" style={{objectFit: "cover"}}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmZ0wQVcpFBG_2GdHhjJgMaBhgxqU-UPi9VsbjKioCs1m6taGQviPhz0zXVtqFLxdem0&usqp=CAU" style={{objectFit: "cover"}}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wlE7RxsYhCgvesbEcOzNGgF6nNDsbyxmggq-hc4AeSZnV_sBkgsCcC_2SQal3ysWBrY&usqp=CAU" style={{objectFit: "cover"}}/>
            <img src="https://blog.appseed.us/content/images/size/w2000/2022/04/cover-blog-mui-introduction.jpg" style={{objectFit: "cover"}}/>
            <img src="data:image/png;base64,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" style={{objectFit: "cover"}}/>
            <img src="https://cdn.dribbble.com/users/3061686/screenshots/17599145/figma-logo-2_4x.png" style={{objectFit: "cover"}}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SuioD_EZtzMJ-aTjvqi2hr76ZBanuWbIqxEQSJKhb5BjRC_o6BBTL8VqB4qSKvWF-88&usqp=CAU" style={{objectFit: "cover"}}/>
            <img src="https://codersera.com/blog/wp-content/uploads/2019/08/visual-studio-code-codersera.jpg" style={{objectFit: "cover"}}/>
           
          {/* </svg> */}
        
         
         
           
          </div>
      
          <div aria-hidden="true" className="marquee__group">
          <img src="https://i.pinimg.com/564x/93/42/44/9342444603bb53e2144bde19c12ed459.jpg" style={{objectFit: "cover"}}/>
            <img src="https://i.pinimg.com/564x/5e/06/3c/5e063c477e797d46fc6edb6c9fa10bf4.jpg" style={{objectFit: "cover"}}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmG8-YWXTGN7BCfAryRDigUdCY6ypJ68IEUUPjdIda8r-dhTcUSSxYhpouR2_MdG-VGQ&usqp=CAU" style={{objectFit: "cover"}}/>
            <img src="https://i.pinimg.com/564x/32/ce/34/32ce3442146f59d52c21ead717d6d1d1.jpg" style={{objectFit: "cover"}}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmZ0wQVcpFBG_2GdHhjJgMaBhgxqU-UPi9VsbjKioCs1m6taGQviPhz0zXVtqFLxdem0&usqp=CAU" style={{objectFit: "cover"}}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wlE7RxsYhCgvesbEcOzNGgF6nNDsbyxmggq-hc4AeSZnV_sBkgsCcC_2SQal3ysWBrY&usqp=CAU" style={{objectFit: "cover"}}/>
            <img src="https://blog.appseed.us/content/images/size/w2000/2022/04/cover-blog-mui-introduction.jpg" style={{objectFit: "cover"}}/>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAC3CAMAAADkUVG/AAABU1BMVEX///+IzgLv7+8AAAD39/f09PSBzABSfAH4+PgRERG1tbUNDQ1/ywDX7rnp6emkpKSVlZWL0gJ+fn7j4+MbGxskJCQrKyvMzMzCwsKh10+vr69vb292dna8vLzd3d2Tk5PU1NSGhoZXV1eLi4sXFxdJSUmfn59jY2NRUVExMTF5twFBQUGO1wJuqABOdgFLS0vQ66zF5phnnQHCv8Xr99p+wAD6/fWT0ihZjQDe8cT1++u44ICn2l2g10zk888lGy5tZ3OY1Dt+eoRGgQBnrwBtfVlRigCDkHSInHFxkkRsikR7jmY9cgBbfilXlQBhjhhvhlRIQU4AJABehh+6wbI3LkA5YgBba0iw3W09ZwAmSgANAB+34HwqPwHJ6KMAGQAXIgE6VwEAABUMEgALNABCVycqJS8AGgCu3GkhFSoGIQAxSwAcLQAZOgBFOlBHVDdJT0SZCj/MAAAOaElEQVR4nO2c+X/bRBqHZY1ky5IjyToiVZZkyXLkOHYOu7napqVpWXaBLmxhCaS0WdIuLJCyu///T/vOjGTLR4vJGhzoPB9anNGRmW/ea14p5TgGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoOxRAS5aTTlVc/iZhGhlp42N5C56oncJOKYE0WRS+JVT+Qm0fFEnudFr7HqidwkWgETZYZMFM1Y9URuEg3qPk191RO5STRjLIrQYEm5gNySQBTJclY9kZtE2lYFUQhRtOqJ3CQaYStJm62Ou+qJ3Ayk9Lb/eAfdFgMtDbzbq57ODUA1NtHj97f7/f7jP8mqJCWVD/4srXpSK0UMDNRwTfP2Xz788KOPP3ry5K+VTz79/P2/Baue2MrgtafoMxRJkIlFgqDe1jSHF5yPP/n876ue3Vs53N/f/xVuy2tfoLPt/qUn8AWwNDgvB192mr/CN10W+zXgq2XfNXiKzrfr9f4BCkWqBj+BkJpRZ/6lkacnSeqqS5zN4dq9r756Priz8AVr5VKpdH+JM+A48xF6BorUS/3zr1MjIiq4QsFY8P82OM+bvVQ1LKS02+2qgnrLqnwPn5drZUytNFjwEiLKrSV9f0z0FFUO+nW4a30bhYKARRFlFAs4qEhq5DiOKIlS1xQ3Z671UNuuIoxi2Wg5qtwt4RVSamuLXbNkUcKn6JN6nU6hf/ZUyrzFMDrrWpC2EOr2ugraDSTLlbrTF6fIrq6nEc9JatBBaDkedFQaU3uw2DVLFYV/iIa5JKV6HzWzUCK0k6auNRJXBWMRRNXrIRSGramrHWSjcVsuXE7a3qvhuZRLR0fgQEcLXrRMUZrouCDJ1iUyaYgVPFtPHEEQ83Arwg5IcKZF6dnV5fdabpHZ4Bh7uHZyd8GLlieK8/K8NJZk+wVCGo6ussq5qNFMgkICEh0k8VJrsoUNhrI+e1cVql9J1qL8JE/z3GJBLOGR0cab5/GQq2mjc4idzATYwzsXg8HepDM92BsMLtaIbmNRDu+srS3oc3OQHv5jq59LUh9+gy5fIBpRWvZrhIxmHBZE0bsSL2qTDuJb1XTmth20wTmKUqXPABIFKYqC0KjGEQxERhSNfKkhJHI6PgkhryDKvSlJsnxUK11MD5Vrp/sFUe7i0driuXwS8+XOyErqx69enVUql0ilEqD6EIGtpAVTQU0BapVo4hbrNgpn7utbiozasEgQRewqtqJYimKjrMZR16tkpGoj4nieosibCFkWguRFVSGzKk8sq5CPaid0aL+QosoFUW7Bh/J1q7gIbfdzST5F35xXKpWdbUT6j7ygf9DfUlC1F40MxUO6CC400cLmIczO3livQo6OXRmvedOy7YCXeA80oJbRtayuK0q8BjphswMPbKNWBD+jBlxHPOgkW3zBB2g+KhMZys/JUCYHGTsai0Kj9LU1OaB2Ui9lklR2tvo7L2khq/7Ur9evXupybipCC3U93uGMYmslRPZMjoafPZhCFjFciDli9u1sixwcXeLQT3APJWsB79qI3P1OLbOJo73slgO84vL9iwEdx3uce9RO7l0M7tdw2s5EOSznJ1wDNdMEHAe9IpKAJvVS/cV7IQ61wqMtfKSp5aJISF3H8SYsmgqsa7aa42SlnTe6O5YSjD4irNSGjfIQu0l8z0RWvnnwqlVqTSe5Y5RLtHQjn7FLHB7l8YYcPyVH97GnZaLcmhukF+TrLVLA9oev0FllpAmMVKBSASXUqz5Ut/5ob2gqHAnCYXH74ypWnqM9n6ATUbK1cVLuEGTFWCpwODu/Oq0qHhEl13l84a3aKIJgAfbxl2WSZPbK1Dse1KYsgohyslYbSfXLeXiMFehvvUZXlaImMHZw9tKD8uT2E9gaog1Hoi2EsMcl4EuiV3za4Y4tZRNvf6w2koprMwuW5JDFO2O74AKlnbxBFG5vFEVre9mCaRV3l4iRiVMs7Mg5p6WRer8c5599HEzOkJ6iSU2wLKXzLpRtXvwtiuNWL5FdN/CaLVNdBy/q8sXbjGOKYXe7Xdu2JkSB471UpxgWtipZsTezAb1hWf6bRIFVH+XWwnEXeMHf03Ei1F0aZYq12trI5S646/EeSNDfRh1Imi1iKjvbI02ItTyLsXn4nUjiw8DzPFdDhudASp541A6WoBS+lJQpUcCS7GpG27Y2cQIej1h29S2igIecknVCFB0UsmwWaQcFnSZFuW7/IHgGueWcRryQmMpxURMsyzNcsHAbUdZlEqHAh1ADTlREhLRaKHFnRMEF7xg7IqIURrrq20ThuOck6exRBeaIcjItyulR5nDX4Iut/sGrPES+h3NPaYr6cQr1a9hT8zrF3IUwKyRTL6rA1qfQYZkRJZrJThCapx7Wv00Ukl/BHfbGDSSacjP3KdoEDbQkm5cPf7EiOAX0t9CoPDeeVXYO6tOq9C+bnNMb17PSOpiLOb0fbLbtjfFXM6LwWXEyBqqSSWObK8poUUSUNZpqaEFGPuYFbLlwnywl38fDRQtaFPl8G40fhHqfVYYzmpTqBz91jWIzstHV3IkoS1dU7CvNiMJ17emHi5MOx80V5UHtPi1mB1kldpiJA3xfom5DslAxpmai0Ox0jZ1P/OxloRkUoRnnIarUv8vaTTz2ITGV3XRaE45rtMfF2BxRkqo1ZVyQcib9Z44oeFlHzwcDGmixhdBq7s7hIZUJy3NaIqrcPbx756RW2BDeK4+s6hfR+a64kVfR9qyh4CrukZBve/ADD3fuK16CDdu4JJOYnxEF/KfaoN8sarWoBraS3cnZ9eeKskZ7THSjU6pha9jPh8gYKU/ujIbKE3ufuXvsBXAmf+JoNqLgZu2/8m6KSfbKM023TFK7DRu6XsdvtHqw+atOisIFEFXajabudxEt8zkNdLIbUKXgEXOeKPu1wjzKNJheFMbKtI69VxiCyDsS5c50rXstns4LKcMK6cFhQ9HoBmjO1g8j+KhqWVYb/lhVRMp8hMZJxLFQu6oo1baSty1lRclH8NkmquaieIiG/wdHtazoKI+e5OzlQ7VSvt7B+KzvqX1RBUnvYNEu5puQf+pPS1L6tLKDhDzEknaC8AZR8DO0Rm/dWu9uNjTiR+HublQ47BqtXm/T98TxN8QjLUMmfiU1Wvme0ex0su7M/uAEx4zTe+Mf+OEAJ5ajk0Jz//Di5AgPDfBZhyenp6fk4F386f510nKRH6aCSn0LKpez3TykWKR/IPV+/kZ/JMKJqFIvDXdAlKtOJkrUJu4jbL5j7x1EaNivk6Y+/LVNd4gvfCHrze7qxFI2fv4+fyyEh+jJ9sFB6WBrmHUSKi8aVBRBMRLyiuTuqif52yN6D7/4+iVC6NXVDhWlRUQRNBTHuHoz/VVPcWWIptyhfadLUtCKIUp2kxB70bv9hqT69EcQ5RyFRBNZQokj8jN7wXeO1mtwH0WF2h4/ien6gSg61349XxbfcCCafWR0o/nu6hJFIi+18COHzQ7k5GjuI+MojmNj9hnhBPrsNpI+WfWmX0QVjHHWf/tvGPFvEvrXRNzFD5VFF3dDDKUBluLNffPE0TlBuE790lTniCL641u9/bG9vJIAl9iQe0K8hdN6OtQpwvzc41AriVQ3xSs0NU32Qs7RyFe8l8qew3kS7EDp8RAfxzYQGGnEyS4dVb2UrhGLgk/F39XQ4Dw3xZsDV01VPgo1slEI8FCU6Kt4V5O+pgLegzNyxKvhd3Nfx8lECQwnjF1O9UOzqYmiFpq6zEmGo6a6yvk858FxI+JCIzQTEmLMGHbqMh514KrITIjRYFG8mJwaGZHIpZoagMXEKUzA90wN9o9NGIo5XvdW8At8JoKEA9udiLs6vry6ujx7/GTum5GOYRh+xLkyfuGCC7yx7ehciB/qwJoMWD6sOZA5GU5zaU83ztwHRr0Ai4QHsSj4VBkrCpaGrTM2ybk8nMAb+D+4oclpq3CfAJEKH/Hct31C/Xzum+gQUySIA5kopqHyzQDvguM4hbAZ8lpaFCWKVTWhyymIkjbTtElCyEiUAC4GZzNSPQXJ8bkqFSUfWokonoWbbY7CcRvHw+Hw+Pj4x3k5JLeLTBROi7EmAZh5mOKeQRPiSUEUTk+a2WoKomgBr6okmxREwZZiGnCA54qimDEdWoko2oaAGykaxz3aKh3Apqj+eu55eUzJLMUngUeDr+SUkxoROViwFGOkbDIWxcWOORLFG4si4duJE6JwDTrkrUKUFPcN1DZ8uv1sSEzl6dzzXEPXmx4ng5W4oGBi+BBvTV+PZVhEavgGHGjwJGzgc2KjEdPlyDENJjjMpEZqkEgjNjJRsFGBTUW+nkDpYqg0OOEYkw1FP1cc/RqkPlQpCWkqImIpBw/nnieZgAq1CnwUOQ0WpPomKc0kElJ50Ah+sCJ4EZyDt09mg1oLOEE2Cn+pWX3Cc+NBU6JnZVbEZ3/oEMcv8+3uBdFjKE0Qnhv3iHRwtx4tcFXsSFLUyF1EkyX4AUeF40YEx31h2ZP9rdATMX8TxTmr4wblIqKoumHoow2NmBpGMuH7YdMw0hX8iJdEM4UtIK1MeNzWrr+/iCh/cBJZErLMwr3uL2opf3B8K059+vBGeoXd5+DfK57R6pFQJKpQ42Oiz/BTofrZD9FKp7R6gl7IizHd2cfHffp63E+P3rFnHFOsG1DPZr+2/vJ4mL9IiR69w/+4jOzjt5YMGlPQ8HgbPxSql+r1x5/1fmctxOXRcMh2kLaq41fPzj744Hj4/kG9fzB8Mudl4neDtCNKUGpnv7Riup6meV6a+F/+57/xKpqjN4MYbTT8dfbP60wiRYHz+63HGQwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBuP/5X8N2160PwcEjwAAAABJRU5ErkJggg==" style={{objectFit: "cover"}}/>
            <img src="https://cdn.dribbble.com/users/3061686/screenshots/17599145/figma-logo-2_4x.png" style={{objectFit: "cover"}}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SuioD_EZtzMJ-aTjvqi2hr76ZBanuWbIqxEQSJKhb5BjRC_o6BBTL8VqB4qSKvWF-88&usqp=CAU" style={{objectFit: "cover"}}/>
            <img src="https://codersera.com/blog/wp-content/uploads/2019/08/visual-studio-code-codersera.jpg" style={{objectFit: "cover"}}/>
      
          

          </div>
        </div>
      
      
      </article>
      
    
    </div>
  )
}

export default Skills
