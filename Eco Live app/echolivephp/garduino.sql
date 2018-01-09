-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 08, 2018 at 04:56 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `garduino`
--

-- --------------------------------------------------------

--
-- Table structure for table `live_data`
--

DROP TABLE IF EXISTS `live_data`;
CREATE TABLE IF NOT EXISTS `live_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `humidity` varchar(10) NOT NULL,
  `moisture` varchar(10) NOT NULL,
  `light` varchar(10) NOT NULL,
  `water` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `live_data`
--

INSERT INTO `live_data` (`id`, `humidity`, `moisture`, `light`, `water`) VALUES
(1, '1001', '1022', '1022', '1022'),
(2, '1001', '1022', '1022', '1022'),
(3, '11212', '1212', '1212', '1212');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
