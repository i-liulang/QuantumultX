

/*



[rewrite_local]

#果冻app
^http[s]?:\/\/.+\.(pgnktni|izivuiw)\.cn\/(.+)\/api\/user\/userInfo url script-response-body https://raw.githubusercontent.com/i-liulang/QuantumultX/main/gd.js

[mitm] 
hostname = *.pgnktni.*


*/


var obj = JSON.parse($response.body);

obj.data =
"IPG0VSU6DsxkZT5BvffOHZgM4pOnPOKZhM7\/HKpB15gHBAYMj9WiEjfD5QG2b0fclqkAFWwoIOmfWQxQonlLqI5gsYvlMXuQjAMp9XxUGKeaSuMI8jyt+L566SP4EuLOTMkBq0xMq7cdGxKAImwDUpGHpUDVak7\/C1RkmGbdb9EeBx\/B\/nU5OTxNvCyMUvcKCV5hvMATQRigcP+XL5nXSCMUN7e2Zo0Uyt4umYzT8mDsXOyIgewUclOnhRZyeu\/XdZF8IMI8okxSYm+JJY6iAMvxJt6tMLZfrjoackYZ7in4motBQ75nFP402Omh0rFrJiL3PfOxmEBKE\/71jsukuCZD2ODXTQtuVW623gMCHPS5XT7MDulUsn6S5QeKO8+CpNRk7fDVNm3zo\/b8VWxYJfqb\/wJ81Dky+yI\/GEdcfsVSlQNNFW5s2WmbgSHwWyFZFB\/zzCSM70vHT1+ILcsCVHhhx3gTYAr1mhVj2XFcqf5kaL1RC8Z6+qNkeZKqb+V9zQP3x2wgFlIXZrjv6+adzluPtUFW1CXwHMTl7Dk301j6zqEtlUKim08E+q9G\/7ZtZQME5+7aGy6RjQMK3X1gsDaUw6QxRAC4xcY19XQCAJFETJZriXZuO4Hd\/b0U7Gm5Q4W9v9qqEVXLNG+x6VSuggIItXN2MbttWFtuItZchYqrIABkfhq3geHli1HWDxeWWZUrVD5aNIKdxFGmpTVKqdwoWG0uOG70gY9Kz1TSduJbyHtCBZJ70cKSiKBxWXCiGzwoA1goq0wopCKUYQptWYw6hcV9KwYuW7Tz3frI7h6WHBEHcAA+y0xaRZkZ9w\/V4VteEzuuEAt8I8f4XbvIOPVTTIccudyMtgS9oz83UbR1iCocWWh9R8XxaEiZ6uA9Xu+W37\/EwZf4qM9gCFvZU5WCKv7\/iFNSd4kKtceZ8ut0Vf1d347ziVViEBdNTHf+NyiY0xcNCvbxS69JZGFkxMRb2FTi09pNLrJOjCTK9l\/PNbOXJ17\/P8YAGcM0o9ZE\/tyMH9aLpbnI8aJ3NWfVN\/f5vbOWnK96rtagpu787uMVzgLj3qBK1PO7uy1pFqNqjsoRIT2Jn0SktSQTGYYV3zTR5B\/Lu6ElPM8vd036JL7ghxrTOMRVkf1ljcwN+5lApA0ROSxAFbrw45oKnewXWA0F1+da8YYf+zmQ+p9DrrhpHpbtf0vyu7hA5TuM5XdvuFjSQhzBo42RPSWYV2FfBNcO8LaoGM8OVEHAe5KaFImVdrN7YXSyhi2GR3ppN7SDgtfX1XILlVj00Ij+tMOWhzRcUpkF8H8EkAN\/clH9ruOtUU+TbEXc5hG4Y7HeY4pIKZBDtznErjdSACQH9iddommWqMb8OlILZA5YQ2TXa\/K9V1VUDJhzY+8JqfBJOCbODDF5VRbSrOjcStFX31I8HHFhGOu+pTsr6a44Mk8YyNM3HrmA5tIrzPnAemLsz1ynXF8kVGy\/7uES3fJWlKxi6l19+ptFu6bntDsShpzBya30GnWuLnBWIvfrJT7DTlTsbRrVav1V+oE2AicFt4Vba7lxRTKr54camYTO\/RGV+SR23z5cPvM5BEMAm\/TMingjf3hjqXefOGnDjl7tPClPthlH+ccmjjao4f7QFqy\/vzRzCk9ckVFHNFmFF8go7D1SKC8B4+VdZS3tC2GdvRDAf+Bh\/sQ9DPPz\/8BctNfH09ofd3RLLP2UIuenpTowLky\/47Z2yn2IpFxyumzz81x+KTWklh1x0GVLJNUaaUI+I0+BANvT7PLy8KS4lgZpgjtRYMCcAeY2zdao0ky5TGDz90uHyZUPKyK2WlCB1EFVxyGyLG7W9szNpu\/Zz\/xONMPSbCL8uav033vqKZJHePKChQjd1MruvkNsV2Q+3DPCSDNBeUrlvhUQAFJ96o82TEi3fOHCscMZO0PSFNC6MsL\/z2CSjoAc6LFm97+0uflXt9TxdEgvldJXOMazIbkP+H0XS02hqlQMublvfHo6ek79XyYDwWXWPBZoTutpz\/wbrapT5IXwVLfGXwbwxep8FN9Vhq4pLf8hxxSBBg+npBxrCYSsyrQUupbMRR7Oo5Hzw8ly6ze+gNEMVrpT4+x3sO1Ei+9HI8gxFVDBcJ9yTYr1H763040sgD6t3cuhmTx2bWT39e258KqgFTTDBOAXe5ay0RTgrr\/zTrrRzBsb71Gh5216dKHAcOc6gQtr4KrPABA19eaTc+DQYDBfBHrSkBVdc+vLOIsab6HWUHeU93z6ATfYlDzo\/LGGHaBECWog3caHGH5OsrhXf5Qbj8QvWq9r";

$done({body: JSON.stringify(obj)}); 
