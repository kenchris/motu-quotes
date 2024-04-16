function run(el) {
const json = { episodes: []};
for (let i = 1; i < el.children.length;i++) {
    if (el.children[i].className != 'vevent module-episode-list-row') continue;
    const child = el.children[i++];
    const next = el.children[i++];
    json.episodes.push ({
    number: child.children[0].innerText,
    title: child.children[1].innerText.replaceAll('"', ''),
    directedBy: child.children[2].innerText,
    writtenBy: child.children[3].innerText,
    airDate: child.children[4].innerText.replaceAll(' ', ' '),
    description: next.children[0].innerText
    });
    
}
console.log(JSON.stringify(json, null, 2))
}