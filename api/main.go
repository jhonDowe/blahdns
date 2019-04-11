package main

import (
	"github.com/bogdanovich/dns_resolver"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/api/:domain", func(c *gin.Context) {
		domain := c.Param("domain")
		resolver := dns_resolver.New([]string{"159.69.198.101"})
		resolver.RetryTimes = 5
		_, err := resolver.LookupHost(domain)
		// newIPArray := ip[0]
		// s, _ := json.Marshal(newIPArray)

		if err != nil {
			// a := err.Error()
			// e, _ := json.Marshal(a)
			c.JSON(200, gin.H{
				"message": "failed",
			})
		} else {
			c.JSON(200, gin.H{
				"message": "ok",
			})
		}

	})
	r.Run(":3000")
}

// env GOOS=linux GOARCH=amd64 go build -ldflags "-s -w" main.go
// upx --brute main

// e := echo.New()
// e.GET("/", func(c echo.Context) error {
// 	return c.String(http.StatusOK, "Hello, World!")
// })

// e.GET("/v1/:domain", func(c echo.Context) error {
// 	domain := c.Param("domain")
// 	resolver := dns_resolver.New([]string{"108.61.201.119"})
// 	resolver.RetryTimes = 5
// 	ip, err := resolver.LookupHost(domain)
// 	if err != nil {
// 		a := err.Error()
// 		e, _ := json.Marshal(a)
// 		// log.Fatal(string(e))
// 		return c.String(http.StatusOK, string(e))
// 		// return  c.String(http.StatusOK, err.Error())
// 	}
// 	newIPArray := ip[0]
// 	s, _ := json.Marshal(newIPArray)
// 	// log.Println(string(s))
// 	return c.String(http.StatusOK, string(s))
// 	// return c.String(http.StatusOK, err.Error())

// })
// e.Logger.Fatal(e.Start("127.0.0.1:3000"))

// http://www.golangprograms.com/how-to-find-the-type-of-variable-by-different-ways-in-golang.html
