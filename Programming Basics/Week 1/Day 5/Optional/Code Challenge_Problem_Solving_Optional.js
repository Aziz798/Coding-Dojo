function getPerson(phrase) {
    var firstPersonPronouns = ['I', 'me', 'my', 'mine', 'we', 'us', 'our', 'ours'];
    var secondPersonPronouns = ['you', 'your', 'yours'];
    var thirdPersonPronouns = ['he', 'him', 'his', 'she', 'her', 'hers', 'it', 'its', 'they', 'them', 'their', 'theirs'];
  
    var firstPersonCount = 0;
    var secondPersonCount = 0;
    var thirdPersonCount = 0;
  
    for (var word of words) {
      if (firstPersonPronouns.includes(word)) {
        firstPersonCount++;
      } else if (secondPersonPronouns.includes(word)) {
        secondPersonCount++;
      } else if (thirdPersonPronouns.includes(word)) {
        thirdPersonCount++;
      }
    }
  
    if (firstPersonCount > secondPersonCount && firstPersonCount > thirdPersonCount) {
      return 'first person';
    } else if (secondPersonCount > firstPersonCount && secondPersonCount > thirdPersonCount) {
      return 'second person';
    } else if (thirdPersonCount > firstPersonCount && thirdPersonCount > secondPersonCount) {
      return 'third person';
    } 
  }