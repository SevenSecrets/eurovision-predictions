import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from './entrySlice';
import '../stylesheets/entryForm.css'

function EntryForm() {

    const dispatch = useDispatch();
    const [songTitle, setSongTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [country, setCountry] = useState('');

    return(
        <div className="EntryForm">
            <form onSubmit={() => dispatch(add({
                songTitle: songTitle,
                artist: artist,
                country: country
            }))} >
                <h2 className='form-title'>Add New Entry:</h2>
                <label className='song-title-input'>
                    Song Title: 
                    <input type='text' name='songTitle' onChange={ e => setSongTitle(e.target.value) } />
                </label>
                <label className='artist-input'>
                    Artist: 
                    <input type='text' name='artist' onChange={ e => setArtist(e.target.value) } />
                </label>
                <label className='country-input'>
                    Country: 
                    <select name='country' onChange={ e => setCountry(e.target.value) }>
                        {/* TODO: extract this list to reduce clutter */}
                        <option value='Albania' >Albania</option>
                        <option value='Australia' >Australia</option>
                        <option value='Austria' >Austria</option>
                        <option value='Azerbaijan' >Azerbaijan</option>
                        <option value='Belgium' >Belgium</option>
                        <option value='Bulgaria' >Bulgaria</option>
                        <option value='Croatia' >Croatia</option>
                        <option value='Cyprus' >Cyprus</option>
                        <option value='Czechia' >Czechia</option>
                        <option value='Denmark' >Denmark</option>
                        <option value='Estonia' >Estonia</option>
                        <option value='Finland' >Finland</option>
                        <option value='France' >France</option>
                        <option value='Georgia' >Georgia</option>
                        <option value='Germany' >Germany</option>
                        <option value='Greece' >Greece</option>
                        <option value='Iceland' >Iceland</option>
                        <option value='Ireland' >Ireland</option>
                        <option value='Israel' >Israel</option>
                        <option value='Italy' >Italy</option>
                        <option value='Latvia' >Latvia</option>
                        <option value='Lithuania' >Lithuania</option>
                        <option value='Malta' >Malta</option>
                        <option value='Moldova' >Moldova</option>
                        <option value='Netherlands' >Netherlands</option>
                        <option value='North Macedonia' >North Macedonia</option>
                        <option value='Norway' >Norway</option>
                        <option value='Poland' >Poland</option>
                        <option value='Portugal' >Portugal</option>
                        <option value='Romania' >Romania</option>
                        <option value='Russia' >Russia</option>
                        <option value='San Marino' >San Marino</option>
                        <option value='Serbia' >Serbia</option>
                        <option value='Slovenia' >Slovenia</option>
                        <option value='Spain' >Spain</option>
                        <option value='Sweden' >Sweden</option>
                        <option value='Switzerland' >Switzerland</option>
                        <option value='Ukraine' >Ukraine</option>
                        <option value='United Kingdom' >United Kingdom</option>
                    </select>
                </label>
                <input className='submit' type='submit' value='Add' data-testid='form-submit' />
            </form>
        </div>
    );
}

export default EntryForm