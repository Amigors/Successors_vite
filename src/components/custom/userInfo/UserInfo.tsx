import style from './UserInfo.module.css'

const UserInfo = ({data}) => {

    return (
        <>
            <div className={style.infoWindow}>
                <div style={{display:'flex',flexDirection:'row', justifyContent:"center"}}>
                    <img className={style.photo}  src="https://yakovgo.gosuslugi.ru/netcat_files/265/2549/headshot.jpg" />
                </div>
                <div>
                    <div style={{display:'flex', justifyContent:'space-around'}}><h2>{data.name}</h2></div>
                    <div style={{display:'flex', justifyContent:'space-around'}}><h3>{data.positionName}</h3></div>
                </div>
                <div style={{padding:'30px', margin:'10px'}}>
                    <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>Дата рождения: <span>{data.birthday}</span></div>
                    <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>Ученая степень: <span>{data.scientist}</span></div>
                    <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>УКР: <span>{data.ukr}</span></div>
                    <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>Уровень защиты: <span>{data.protect}</span></div>
                </div>
            </div>
        </>
    )
}

export default UserInfo