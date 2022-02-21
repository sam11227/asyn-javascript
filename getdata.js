class APi {

    async getuser(url) {
        const res = await fetch(url);
        const users = await res.json();
        return users;
    }
}