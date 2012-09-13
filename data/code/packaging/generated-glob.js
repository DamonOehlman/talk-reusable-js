// req: underscore as _
(function(glob) {
    function fong(crowd) {
      // find valid, fongable targets
      var targets = _.filter(crowd, function(target) {
        return (target.name === 'Chaucer' || target.annoying) &&
          typeof target.kick == 'function';
      });

      // kick each of the valid targets
      _.invoke(targets, 'kick');

      // return the kicked targets
      return targets;
    }

    if (typeof fong != 'undefined') {
        glob.fong = fong;
    }
}(this));