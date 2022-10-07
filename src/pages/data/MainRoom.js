import React, { Component } from 'react'
import data from './data.json'

import { BiBed } from 'react-icons/bi';
import {MdPersonOutline} from 'react-icons/md';

class MainRoom extends Component {
	render() {
		return (
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-6'>
                { data.RoomSelected.map((roomSelected, i) => {
						return (
                            <div class="rounded-3xl overflow-hidden shadow-lg">
                                <img class="w-full" src={roomSelected.image} alt="Sunset in the mountains" />
                                <div class="px-6 p-4">
                                    <div class="font-bold text-2xl mb-2">{roomSelected.roomTitle}</div>
                                    <p class="text-gray-700 text-base">{roomSelected.desc}</p>
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> <MdPersonOutline /> {roomSelected.gues} Guest</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><BiBed />{roomSelected.bed} Bed</span>
                                </div>
                                <div className='flex items-center justify-between px-4 pb-4 pt-3 border-t border-zinc-200'>
                                    <p className='font-bold text-dark text-2xl'>Rp {roomSelected.price}<span className='text-base font-light text-zinc-600'> /night</span> </p>
                                    <a href={roomSelected.link} className="hover:bg-rose-900 text-white font-bold py-4 px-8 rounded-full w-fit bg-rose-600">Book Now</a>
                                </div>
                            </div>


						);
					})
				}
            </div>
        );
    }
} 
export default MainRoom;