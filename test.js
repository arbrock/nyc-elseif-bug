var m = require('./bug');

m.buggy_if(true, false);
m.buggy_if(false, false);

m.buggy_elseif(true, false);
m.buggy_elseif(false, false);

m.buggy_next(true, false);
m.buggy_next(false, false);
