# Troubleshooting

If having X-Framing errors in console then add the below snipped to `.htaccess` in the root of your site or site's subdomain.

```
###
Header always unset X-Frame-Options
###
```