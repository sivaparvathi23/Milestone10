<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p id="demo"></p>

<script>
const o = {
  a: 1,
  b: 2,
  _proto_: {
    c: 3,
  },
};

document.write(o.a); // 1
document.write("<br>");
document.write(o.b); // 2
document.write("<br>");
document.write(o.c); // 3
document.write("<br>");
</script>

</body>
</html>