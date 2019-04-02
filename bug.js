function buggy_if(do_if, do_elseif) {
  if (do_if) {
    console.log("Hit if branch");
  } else /* istanbul ignore if */ if(do_elseif) {
    console.log("Hit else if branch");
  } else {
    console.log("Hit final else");
  }
}

function buggy_elseif(do_if, do_elseif) {
  /* istanbul ignore else */
  if (do_if) {
    console.log("Hit if branch");
  } else if(do_elseif) {
    console.log("Hit else if branch");
  } else {
    console.log("Hit final else");
  }
}

function buggy_next(do_if, do_elseif) {
  if (do_if) {
    console.log("Hit if branch");
  } else /* istanbul ignore next */ if(do_elseif) {
    console.log("Hit else if branch");
  } else {
    console.log("Hit final else");
  }
}

module.exports = {
  buggy_if,
  buggy_elseif,
  buggy_next
};
