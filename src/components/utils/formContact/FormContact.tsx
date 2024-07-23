"use client";
import { Text } from '@/constant'
import React, { useState } from 'react'

const FormContact = () => {
    const [city, setCity] = useState('')
    const [role, setRole] = useState('')
    const cities = [
        'Aïn Harrouda', 'Ben Yakhlef', 'Bouskoura', 'Casablanca', 'Médiouna',
        'Mohammadia', 'Tit Mellil', 'Ben Yakhlef', 'Bejaâd', 'Ben Ahmed',
        'Benslimane', 'Berrechid', 'Boujniba', 'Boulanouare', 'Bouznika',
        'Deroua', 'El Borouj', 'El Gara', 'Guisser', 'Hattane',
        'Khouribga', 'Loulad', 'Oued Zem', 'Oulad Abbou', 'Oulad H\'Riz Sahel',
        'Oulad M\'rah', 'Oulad Saïd', 'Oulad Sidi Ben Daoud', 'Ras El Aïn', 'Settat',
        'Sidi Rahhal Chataï', 'Soualem', 'Azemmour', 'Bir Jdid', 'Bouguedra',
        'Echemmaia', 'El Jadida', 'Hrara', 'Ighoud', 'Jamâat Shaim',
        'Jorf Lasfar', 'Khemis Zemamra', 'Laaounate', 'Moulay Abdallah', 'Oualidia',
        'Oulad Amrane', 'Oulad Frej', 'Oulad Ghadbane', 'Safi', 'Sebt El Maârif',
        'Sebt Gzoula', 'Sidi Ahmed', 'Sidi Ali Ban Hamdouche', 'Sidi Bennour', 'Sidi Bouzid',
        'Sidi Smaïl', 'Youssoufia', 'Fès', 'Aïn Cheggag', 'Bhalil',
        'Boulemane', 'El Menzel', 'Guigou', 'Imouzzer Kandar', 'Imouzzer Marmoucha',
        'Missour', 'Moulay Yaâcoub', 'Ouled Tayeb', 'Outat El Haj', 'Ribate El Kheir',
        'Séfrou', 'Skhinate', 'Tafajight', 'Arbaoua', 'Aïn Dorij',
        'Dar Gueddari', 'Had Kourt', 'Jorf El Melha', 'Kénitra', 'Khenichet',
        'Lalla Mimouna', 'Mechra Bel Ksiri', 'Mehdia', 'Moulay Bousselham', 'Sidi Allal Tazi',
        'Sidi Kacem', 'Sidi Slimane', 'Sidi Taibi', 'Sidi Yahya El Gharb', 'Souk El Arbaa',
        'Akka', 'Assa', 'Bouizakarne', 'El Ouatia', 'Es-Semara',
        'Fam El Hisn', 'Foum Zguid', 'Guelmim', 'Taghjijt', 'Tan-Tan',
        'Tata', 'Zag', 'Marrakech', 'Ait Daoud', 'Amizmiz',
        'Assahrij', 'Aït Ourir', 'Ben Guerir', 'Chichaoua', 'El Hanchane',
        'El Kelaâ des Sraghna', 'Essaouira', 'Fraïta', 'Ghmate', 'Ighounane',
        'Imintanoute', 'Kattara', 'Lalla Takerkoust', 'Loudaya', 'Lâattaouia',
        'Moulay Brahim', 'Mzouda', 'Ounagha', 'Sid L\'Mokhtar', 'Sid Zouin',
        'Sidi Abdallah Ghiat', 'Sidi Bou Othmane', 'Sidi Rahhal', 'Skhour Rehamna', 'Smimou',
        'Tafetachte', 'Tahannaout', 'Talmest', 'Tamallalt', 'Tamanar',
        'Tamansourt', 'Tameslouht', 'Tanalt', 'Zeubelemok', 'Meknès‎',
        'Khénifra', 'Agourai', 'Ain Taoujdate', 'MyAliCherif', 'Rissani',
        'Amalou Ighriben', 'Aoufous', 'Arfoud', 'Azrou', 'Aïn Jemaa',
        'Aïn Karma', 'Aïn Leuh', 'Aït Boubidmane', 'Aït Ishaq', 'Boudnib',
        'Boufakrane', 'Boumia', 'El Hajeb', 'Elkbab', 'Er-Rich',
        'Errachidia', 'Gardmit', 'Goulmima', 'Gourrama', 'Had Bouhssoussen',
        'Haj Kaddour', 'Ifrane', 'Itzer', 'Jorf', 'Kehf Nsour',
        'Kerrouchen', 'M\'haya', 'M\'rirt', 'Midelt', 'Moulay Ali Cherif',
        'Moulay Bouazza', 'Moulay Idriss Zerhoun', 'Moussaoua', 'N\'Zalat Bni Amar', 'Ouaoumana',
        'Oued Ifrane', 'Sabaa Aiyoun', 'Sebt Jahjouh', 'Sidi Addi', 'Tichoute',
        'Tighassaline', 'Tighza', 'Timahdite', 'Tinejdad', 'Tizguite',
        'Toulal', 'Tounfite', 'Zaouia d\'Ifrane', 'Zaïda', 'Ahfir',
        'Aklim', 'Al Aroui', 'Aïn Bni Mathar', 'Aïn Erreggada', 'Ben Taïeb',
        'Berkane', 'Bni Ansar', 'Bni Chiker', 'Bni Drar', 'Bni Tadjite',
        'Bouanane', 'Bouarfa', 'Bouhdila', 'Dar El Kebdani', 'Debdou',
        'Douar Kannine', 'Driouch', 'El Aïoun Sidi Mellouk', 'Farkhana', 'Figuig',
        'Ihddaden', 'Jaâdar', 'Jerada', 'Kariat Arekmane', 'Kassita',
        'Kerouna', 'Laâtamna', 'Madagh', 'Midar', 'Nador',
        'Naima', 'Oued Heimer', 'Oujda', 'Ras El Ma', 'Saïdia',
        'Selouane', 'Sidi Boubker', 'Sidi Slimane Echcharaa', 'Talsint', 'Taourirt',
        'Tendrara', 'Tiztoutine', 'Touima', 'Touissit', 'Zaïo',
        'Zeghanghane', 'Rabat', 'Salé', 'Ain El Aouda', 'Harhoura',
        'Khémisset', 'Oulmès', 'Rommani', 'Sidi Allal El Bahraoui', 'Sidi Bouknadel',
        'Skhirate', 'Tamesna', 'Témara', 'Tiddas', 'Tiflet',
        'Touarga', 'Agadir', 'Agdz', 'Agni Izimmer', 'Aït Melloul',
        'Alnif', 'Anzi', 'Aoulouz', 'Aourir', 'Arazane',
        'Aït Baha', 'Aït Iaâza', 'Aït Yalla', 'Ben Sergao', 'Biougra',
        'Boumalne-Dadès', 'Dcheira El Jihadia', 'Drargua', 'El Guerdane', 'Harte Lyamine',
        'Ida Ougnidif', 'Ifri', 'Igdamen', 'Ighil n\'Oumgoun', 'Imassine',
        'Inezgane', 'Irherm', 'Kelaat-M\'Gouna', 'Lakhsas', 'Lakhsass',
        'Lqliâa', 'M\'semrir', 'Massa (Maroc)', 'Megousse', 'Ouarzazate',
        'Oulad Berhil', 'Oulad Teïma', 'Sarghine', 'Sidi Ifni', 'Skoura',
        'Tabounte', 'Tafraout', 'Taghzout', 'Tagzen', 'Taliouine',
        'Tamegroute', 'Tamraght', 'Tanoumrite Nkob Zagora', 'Taourirt ait zaghar', 'Taroudannt',
        'Temsia', 'Tifnit', 'Tisgdal', 'Tiznit', 'Toundoute',
        'Zagora', 'Afourar', 'Aghbala', 'Azilal', 'Aït Majden',
        'Beni Ayat', 'Béni Mellal', 'Bin elouidane', 'Bradia', 'Bzou',
        'Dar Oulad Zidouh', 'Demnate', 'Dra\'a', 'El Ksiba', 'Foum Jamaa',
        'Fquih Ben Salah', 'Kasba Tadla', 'Ouaoula', 'Oued Zem', 'Sidi Jaber',
        'Souk Sebt Oulad Nemma', 'Zaouiat Cheikh', 'Agadir Melloul', 'Ait Yadine', 'Amghras',
        'Assoul', 'Aït Taguella', 'Azgour', 'Azilal', 'Aït M\'Hamed',
        'Bzou', 'Demnate', 'El Ksiba', 'Foum Jamaa', 'Ouaoula',
        'Taghzout', 'Taliouine', 'Tamallalt', 'Tamegroute', 'Taroudannt'
    ];
    const roles = ["Student", "Corporate","Public Administration" /* more roles here */];
    const programs = ["Full Stack Program", "DevOps & Cloud Program", "Data-Science Program", "Machine Learning Program", "Software Engeneering Program", /* more programs here */];
    return ( 
        <div className='mx-auto font-normal md:text-base text-xs max-w-[610px]'>
            <form className='flex flex-col gap-2 w-full '>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-2 w-full'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='name'>First Name</label>
                        <input type='text' className='py-3 pl-6 rounded-lg bg-transparent border border-quaternary-color text-quaternary-color  focus:outline-none' id='name' placeholder='First name here...' />
                    </div>
                    <div className='flex flex-col   gap-2'>
                        <label htmlFor='name'>Last Name</label>
                        <input type='text' id='name' className='py-3 pl-6 rounded-lg bg-transparent border border-quaternary-color text-quaternary-color  focus:outline-none' placeholder='Last name here...' />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='email'>Email Adress</label>
                    <input type='email' id='email' className='py-3 pl-6 rounded-lg bg-transparent border border-quaternary-color text-quaternary-color  focus:outline-none' placeholder='Type your email here...' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='' placeholder='Type your phone number...' className='py-3 pl-6 rounded-lg bg-transparent border border-quaternary-color text-quaternary-color  focus:outline-none' id='phone' />
                </div>
                <div className='flex gap-2 flex-col  '>
                    <div className='flex gap-2 flex-col'>
                        <div>
                            <h4>City</h4>
                        </div>
                        <div className='flex  rounded-lg pr-6 border border-quaternary-color text-quaternary-color w-full justify-between items-center'>
                            <select  className=' rounded-lg bg-transparent w-full py-3 cursor-pointer px-6 h-full border-none text-quaternary-color  focus:outline-none'>
                                <option value="">Choose your city...</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                    </div>
        
                    <div className='flex flex-col gap-2'>
                        <div>
                            <h4>Who are you </h4>
                        </div>
                        <div className='flex  rounded-lg pr-6 border border-quaternary-color text-quaternary-color w-full justify-between items-center'>
                            <select  className=' rounded-lg bg-transparent w-full py-3 cursor-pointer px-6 h-full border-none text-quaternary-color  focus:outline-none'>
                                <option value="">Choose your role</option>
                                {roles.map((role, index) => (
                                    <option key={index} value={role}>{role}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <h4>Program </h4>
                        </div>
                        <div className='flex  rounded-lg pr-6 border border-quaternary-color text-quaternary-color w-full justify-between items-center'>
                            <select  className=' rounded-lg bg-transparent w-full py-3 cursor-pointer px-6 h-full border-none text-quaternary-color  focus:outline-none'>
                                <option value="">Choose your program ...</option>
                                {programs.map((program, index) => (
                                    <option key={index} value={program}>{program}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='py-3 mt-2 w-full border-none flex items-center md:text-base text-xs justify-center border rounded-lg bg-action-primary font-bold '>
                        {Text.pages.Acceuil.Contact.button}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormContact