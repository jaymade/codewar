	// In this simple Kata your task is to create a
	// function that turns a string into a Mexican Wave.You will be passed a string and you must
	// return that string in an array where an uppercase letter is a person standing up.

	function wave(text) {
        let response = [];
        text.split("").forEach((char, index) => {
            if (char == " ") {
                return;
            }
            response.push(text.slice(0, index) + char.toUpperCase() + text.slice(index + 1));
        });
        console.log(response); 
        return response;
	}
    wave('hello goodbye');
    
    // const wave = s => Array.from(s, (_, i) => /\s/.test(s[i]) ? null : s.slice(0, i) + s[i].toUpperCase() + s.slice(i + 1)).filter(Boolean);


    // function wave(str) {
    //     return str.split('').map((l, i, a) => {
    //         let c = a.slice();
    //         c[i] = c[i].toUpperCase();
    //         return c.join('');
    //     }).filter((w, i) => w[i] !== ' ');
    // }