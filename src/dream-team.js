export default function createDreamTeam(members) {
  if ( members && members.map) {
    let abbr = members.map((member) => {
      if (typeof member === 'string') return member.trim()[0].toUpperCase()
    });

    abbr.sort();

    return abbr.join('');
  }

  return false;
}
