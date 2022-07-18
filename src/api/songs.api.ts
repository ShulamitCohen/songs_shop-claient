import axios from "axios";
import { Song } from "../model/SongModel.model";

export default async function getAllSongs() {
    try {
        const response = await axios.get('http://localhost:8080/songs/getAllSongs');
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function saveSongApi(title: String, artist: String, genre: String, length: Number, price: Number) {
    try {
        const newSongPost = {
            title: title,
            artist: artist,
            genre: genre,
            length: length,
            price: price,
        };
        const resp = await axios.post('http://localhost:8080/songs/addSong', newSongPost);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export async function saveChangesApi(id: String, title: String, artist: String, genre: String, length: Number, price: Number) {
    let song: Song = {
        _id: id,
        title: title,
        artist: artist,
        genre: genre,
        length: length,
        price: price,
    }
    const url = `http://localhost:8080/songs/updateSong/${id}`;
    const res = await axios.put(url,
        song, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    });
    console.log(res);
    return res;
}

export async function deleteSong(id: String) {
    try {
        const url = `http://localhost:8080/songs/delete/${id}`;
        const response = await axios.delete(url, {
            headers: {
                Accept: 'application/json',
            },
        }
        );
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
//export const  deleteSong=async=> {


// export function saveSongApi(title: String, artist: String, genre: String, length: Number, price: Number) {זה טוב בלי אסינק אוויט ואקסיאוס
//     return fetch('http://localhost:8080/songs/addSong', {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         method: 'POST',
//         body: JSON.stringify({
//             title: title,
//             artist: artist,
//             genre: genre,
//             length: length,
//             price: price,
//         }),
//     })
//         .then(response => response.json())
//         .then(data => {
//             if (data)
//                 alert(data.id);
//             return
//         });
// }



// export default async function saveSongApi(song : AddSong){
//     try {
//         const url = 'http://localhost:8080/songs/addSong';
//         const response = await fetch(url, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(song)
//         });
//         const data = response.json();
//         console.log(data);
//         return data;
//     }
//     catch (err: any) {
//         console.error(err);
//     }
// }



// export async function saveChangesApi(id:String,title:String, artist:String, genre:String, length:Number, price:Number){

//         try {
//           const response = await axios.put('localhost:8080/songs/getSongById'+id, {
//             params: {
//             title: title,
//             artist: artist,
//             genre: genre,
//             length: length,
//             price: price,
//             }
//           })
//           console.log(response);
//         } catch (error) {
//           console.error(error);
//         }


// }
// export async function getArtistNamesApi(){
//     try {
//         const response = await axios.get('http://localhost:8080/songs/getArtistNames');
//         console.log(response);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// }


// function getAllSongsApiButItsNotWork() {
//     return fetch('http://localhost:8080/songs/getAllSongs')
//         .then(response => {
//             if (response.ok && response.status == 200)
//                 return response.json();
//         })
//         .then(data => {
//             if (data) {
//                 console.log(data, "data in api songs");
//                 return data;
//             }
//             else {
//                 alert("there is no songs")
//             }
//         }).catch((err) => {
//             console.log(err);
//         });
// }


// export async function deleteSongApi(id: String): Promise<string> {
//     try {
//         const url = `http://localhost:8080/songs/delete/${id}`;
//         const { data, status } = await axios.delete<string>(
//             url,
//             {
//                 headers: {
//                     Accept: 'application/json',
//                 },
//             },
//         );
//         console.log('response is: ', data);
//         console.log('response status is: ', status);
//         return data;
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.log('error message: ', error.message);
//             // 👇️ error: AxiosError<any, any>
//             return error.message;
//         } else {
//             console.log('unexpected error: ', error);
//             return 'An unexpected error occurred';
//         }
//     }
// }